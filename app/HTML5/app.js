(function (root) {


  root.app = {};


  // Store VSTB player
  var player = null;


  // Store available modules provided by VSTB
  var vstbModules = null;


  var autoplay = false;


  // Track whether video text (cc or subtitles) are on.
  var textEnabled = false;


  // Reference to the parsed manifest.
  var manifest = null;


  // Store functions to remove eventListeners.
  var remove = {};


  // Fake userInfo
  var userInfo = {
    userId: 10,
    reportingId: '1'
  };


  var userAccessTokenDefault = '{"signature":"75958dfc215ecd289f544736e79f7edefe65d3e70da060afaca463c4e15510d7","uniqueId":"cefaf3c5-dab7-46ab-bc9c-27e614291d41","expiryTime":"1481274291538","userToken":"97afe59c-3d1e-4753-9ab5-3e6af4332580","travellingSession":"VkF1Q1ZpMmZpZSt4MFJhdkZZU2JtUT09","heartbeatURL":"http://torsav-prod-telus-app-01:10201/optik"}'


  var selectedServerValues = {

    serverUrl: null,

    carrierId: null,

    appId: null,

    userAccessToken: null

  }


  //We need to match deviceID to one inside UAT ...
  var deviceIdFromUat = 'cefaf3c5-dab7-46ab-bc9c-27e614291d41';

  
  var bandWidthRestrictions = {
    min: null,
    max: null
  }


  /**
   * 3 = VOD
   * 4 = LIVE
   * 
   * No other content types are currently specified.
   */ 
  var contentType = null;


  var networkHandler = {
    handlePreExecution: function(fullUrl, httpParams, httpHeaders) {

      //If it's a vstb action, we replace uniqueId with one from UAT
      //othewise UAT won't be usable for testing purposes
      if(fullUrl.indexOf('action=') >= 0) {
        httpParams["uniqueId"] = deviceIdFromUat;
      }
    }
  };


  // HTML Video Element
  root.app.video = document.getElementById('video');


  // Preconfigured server setups
  var servers = {
    'Sandbox' : {
      serverUrl: 'http://54.191.76.80/vstb/app',
      carrierId: '1',
      appId: '5004',
      uat: userAccessTokenDefault,
      contentId: '21338'
    },

    'AWS': {
      serverUrl: 'http://52.10.163.163/vstb/app',
      carrierId: '1',
      appId: '5401',
      uat: userAccessTokenDefault,
      contentId: '6'
     },

    'dev-ovc1': {
      serverUrl: 'http://dev-ovc1.quickplay.com/vstb/app',
      carrierId: '0',
      appId: '5000',
      uat: userAccessTokenDefault,
      contentId: '5013'
    },

    'Integration': {
      serverUrl: 'http://san-integration-qpmtvx54.quickplay.com/vstb/app',
      carrierId: '0',
      appId: '5000',
      uat: userAccessTokenDefault,
      contentId: '182'
    }
  }


  // List of mpds we can play
  var content = [{
      description: 'MP4 DASH', 
      url: 'http://shaka-player-demo.appspot.com/assets/car-20120827-manifest.mpd'
    }, {
      description: 'MULTILINGUAL SUBTITLES', 
      url: 'http://shaka-player-demo.appspot.com/assets/angel_one.mpd'
    }, {
      description: 'LIVE STREAM', 
      url: 'http://vm2.dashif.org/livesim/testpic_2s/Manifest.mpd'
    }, 
  ]


  // Create a style sheet just for manipulating captions
  var captionsStylesSheet = createStyleSheet();

  app.loadContentUrl = function () {
    if (!player.getUserAccessToken()) {
      setupPlayer(); 
    }

    /**
     * Put up the spinner and cover the video to avoid any ugly flashing
     * While content is loading.
     */
    // root.ui.spinner.show();
    root.ui.videoCover.show();

    var url = document.getElementById('content-url').value,
        customUrl = document.getElementById('custom-content-url').value;

    var contentRequest = {
      contentUrl: customUrl || url,
      billingpackage: null,
      clientPrice: null,
      contentPriceCurrency: null,
      contentType: contentType
    }

    /**
     * Prepare content from the given url to be played.
     * Video will auto play if the second parameter is true.
     * If there was a customUrl provided, use that, otherwise load
     * the url selected from the dropdown.
     */
    try {
      player.prepare(contentRequest, userInfo);  
    } catch (e) {
      onPlayerError(e);
    }
  };


  app.loadContentId = function () {
    if (!player.getUserAccessToken()) {
      setupPlayer(); 
    }

    /**
     * Cover the video element so we don't get any weird flashing
     * while videos are being loaded.
     */
    root.ui.videoCover.show();
    // root.ui.spinner.show();

    var contentRequest = {
      contentId: contentId,
      billingpackage: null,
      clientPrice: null,
      contentPriceCurrency: null,
      contentType: contentType
    }

    /**
     * Same as above but the id must be a number or we will try
     * to use the id as a url and you'll get errors. 
     */
    try {
      player.prepare(contentRequest, userInfo);  
    } catch (e) {
      onPlayerError(e);
    }
  };


  app.switchTextTrack = function (tracks) {
    /**
     * Select which text track to display by id
     */
    var trackId = tracks.selectedOptions[0].value;
    manifest.selectTextTrack(trackId);
    player.enableTextTrack(textEnabled);
  };


  app.switchAudioTrack = function (tracks) {
    var trackId = tracks.selectedOptions[0].value;
    manifest.selectAudioTrack(trackId);
  };


  /**
   * Styling text tracks is done through the ::cue 
   * pseudo-selector so we can't directly set them through
   * a DOM element. Instead we have to modify stylesheets.
   * NOTE: This seems to cause a slight pause in playback so
   * we need to find another solution.
   */
  app.switchTextTrackColor = function (colors) {
    var color = colors.selectedOptions[0].value;

    for (var i = 0; i < captionsStylesSheet.rules.length; i++) {
      if (captionsStylesSheet.rules[i].style[0] === 'color') {
        captionsStylesSheet.rules[i].style.color = color;
        return;
      };
    }

    captionsStylesSheet.addRule('::cue', 'color: ' + color);
  };


  app.switchTextTrackSize = function (sizes) {
    var size = sizes.selectedOptions[0].value;

    for (var i = 0; i < captionsStylesSheet.rules.length; i++) {
      if (captionsStylesSheet.rules[i].style[0] === 'font-size') {
        captionsStylesSheet.rules[i].style.fontSize = size + 'px';
        return;
      };
    }
    
    captionsStylesSheet.addRule('::cue', 'font-size: ' + size + 'px');
  };


  app.togglePlay = function () {
    var video = root.app.video;
    video.paused ? video.play() : video.pause();
  };


  /**
   * Toggle the display of captions/subtitles by passing true or false.
   */ 
  app.toggleTextTracks = function () {
    player.enableTextTrack(!textEnabled);
  };


  app.setAutoplay = function (checkbox) {
    autoplay = checkbox.checked;
  };


  app.setMinBandwidth = function () {
    bandWidthRestrictions.min = Number(ui.inputs.minBandwidth.element.value);
    if (!manifest) {return;}
    manifest.setMinBandwidth(bandWidthRestrictions.min);
  };


  app.setMaxBandwidth = function () {
    bandWidthRestrictions.max = Number(ui.inputs.maxBandwidth.element.value);
    if (!manifest) {return;}
    manifest.setMaxBandwidth(bandWidthRestrictions.max);
  };


  app.populateServerUrl = function (element) {
    selectedServerValues.serverUrl = element.value;
  };


  app.populateCarrierId = function (element) {  
    selectedServerValues.carrierId = element.value;  
  };


  app.populateContentId = function (element) {
    contentId = element.value;
  }


  app.populateAppId = function (element) {
    selectedServerValues.appId = element.value;
  };


  app.populateUat = function (element) {
    selectedServerValues.userAccessToken = element.value;
  };

  app.populateContentType = function (element) {
    contentType = Number(element.value);
  };


  app.selectServer = function (element) {
    var server = servers[element.value];
    
    ui.inputs.contentId.element.value = server.contentId;
    ui.inputs.serverUrl.element.value = server.serverUrl;
    ui.inputs.carrierId.element.value = server.carrierId;
    ui.inputs.appId.element.value = server.appId;
    ui.inputs.uat.element.value = server.uat;

    for (var input in ui.inputs) {
      ui.inputs[input].element.oninput && 
        ui.inputs[input].element.oninput();
    }
  };


  /**
   * Above 1 plays back fast. Below 1 plays back slow.
   */
  app.setPlaybackRate = function (rate) {
    player.setPlaybackRate(rate);
  };


  function createPlayerObject() {
    try {
      player = root.vstb.createPlayer(root.app.video, 
                                      selectedServerValues.serverUrl, 
                                      selectedServerValues.carrierId, 
                                      selectedServerValues.appId, 
                                      null);  
    } catch (e) {
      onPlayerError(e);
      return
    }
     
    // Make accessible from outside for easier debugging
    app.player = player;
  }


  function setupPlayer() {
    root.ui.videoCover.show();

    loadPlayer();

    // Get a copy of the parsed manifest.     
    manifest = player.getManifest();
    
    // Get object containing all available modules
    vstbModules = player.getModules();

    checkForAndSetBandwidthRestrictions();

    attachVideoListeners();
  }  

  function init() {
    initUI();
  }

  function initUI() {
    root.ui.dropDowns.contentUrl.buildDropdown(content);
    root.ui.dropDowns.servers.buildDropdown(servers);
    initialDropdownSync();
    ui.buttons.loadContentUrl.addEventListener('click', app.loadContentUrl);
    ui.buttons.loadContentId.addEventListener('click', app.loadContentId);
    ui.buttons.selectServer.addEventListener('click', selectServer);
  }

  function loadPlayer() {
    try {
      player.setUserAccessToken(selectedServerValues.userAccessToken);

      player.subscribe('error', onPlayerError);
      player.subscribe('contentChanged',  function () {/** Do stuff */});
      player.subscribe('unloaded',  function (request) {/** Do stuff */});
      player.subscribe('licenseAcquired', function () {/** Do stuff */});
      player.subscribe('libraryStarted',  function () {/** Do stuff */});
      player.subscribe('bufferingStart',  function () {/** Do stuff */});
      player.subscribe('bufferingEnd',    function () {/** Do stuff */});

      player.getModules().network.
          setNetworkHandler(networkHandler);
    } catch(e) {
      onPlayerError(e);
      return;
    }
  }

  function onPlayerError(error) {
    ui.errorMessage.set(error);
    ui.errorMessage.show();
  }

  function checkForAndSetBandwidthRestrictions() {
    if (bandWidthRestrictions.min) {
      manifest.setMinBandwidth(bandWidthRestrictions.min);  
    }
    if (bandWidthRestrictions.max) {
      manifest.setMaxBandwidth(bandWidthRestrictions.max);
    }
  }

  function buildTrackLists() {
    root.ui.dropDowns.audio.buildDropdown(manifest);
    root.ui.dropDowns.text.buildDropdown(manifest);    
  }

  function initialDropdownSync() {
    ui.dropDowns.textColor.element.onchange();
    ui.dropDowns.textSize.element.onchange();
    ui.dropDowns.servers.element.onchange();
    ui.inputs.vod.element.onclick();
    ui.inputs.vod.element.checked = true;
  }

  function closeServerModal() {
    var modal = document.getElementsByClassName('server-selection-modal')[0];
    modal.className += ' closed';
  }

  function displayServerInfo() {
    var serverInfoDisplay = document.getElementById('server-info');
    for (var key in selectedServerValues) {
      var elem = document.createElement('p');
      elem.innerHTML = key + ': ' + selectedServerValues[key];
      serverInfoDisplay.appendChild(elem);
    } 
  }

  function selectServer() {
    createPlayerObject();
    closeServerModal();
    displayServerInfo();
  }

  function attachVideoListeners() {
    /**
     * Add a callback when the adaptation set changes    
     * Capture removeListener function in case we want to 
     * unhook this listener later
     */
    remove.adaptationListener = manifest.subscribe('adaptation', buildTrackLists);

    /**
     * Add listeners for buffering events. Removers are returned in case
     * you want to keep a reference so you can unlisten in the future.
     */
    remove.bufferingStartListener = player.subscribe('bufferingStart', onBufferingStart);
    remove.bufferingEndListener = player.subscribe('bufferingEnd', onBufferingEnd);
    root.app.video.addEventListener('playing', onBufferingEnd);
  }

  function onBufferingStart() {
    root.ui.spinner.show();
  }

  function onBufferingEnd() {
    root.ui.videoCover.hide();
    root.ui.spinner.hide();
  }

  /**
   * Styling text tracks is done through the ::cue 
   * pseudo-selector so we can't directly set them through
   * a DOM element. Instead we have to modify stylesheets.
   * Here we are just creating a stylesheet to hold the cue color.
   */
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }

  /**
   * Because we are using the default player controls, we need to keep
   * our custom toggleTextTracks button in sync with the CC button
   * on the player. This isn't necessary if you build a custom UI.
   */
  root.app.video.textTracks.onchange = function () {
    textEnabled = app.video.textTracks[0].mode === 'showing';
  }
  root.onresize = root.ui.videoCover.resize.bind(root.ui.videoCover);
  root.onscroll = root.ui.videoCover.resize.bind(root.ui.videoCover);
  root.app.video.onresize = root.ui.videoCover.resize.bind(root.ui.videoCover); 

  window.addEventListener('load', init);
}(this))
