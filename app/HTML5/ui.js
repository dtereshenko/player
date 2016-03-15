(function (root) {

  var ui = {};

  root.ui = ui;

  ui.buttons = {};

  ui.buttons.loadContentUrl = document.getElementById('load-content-url-btn');

  ui.buttons.loadContentId = document.getElementById('load-content-id-btn');

  ui.buttons.selectServer = document.getElementById('select-server-btn');

  ui.dropDowns = {};

  ui.dropDowns.text = {
    element: document.getElementById('available-text-tracks'),

    buildDropdown: function (manifest) {
      buildTrackList('text', manifest, function (track) {
        return new Option(track.language, track.id);
      });       
    }
  };

  ui.dropDowns.audio = {
    element: document.getElementById('available-audio-tracks'),

    buildDropdown: function (manifest) {
      buildTrackList('audio', manifest, function (track) {
        return new Option(track.language + ' @ ' + track.bandwidth, track.id);
      }); 
    }
  };

  ui.dropDowns.contentUrl = {
    element: document.getElementById('content-url'),

    buildDropdown: function (content) {
      content.forEach(function (item) {
        var option = new Option(item.description, item.url);
        ui.dropDowns.contentUrl.element.appendChild(option);
      });
    }
  };

  ui.dropDowns.servers = {
    element: document.getElementById('servers'),

    buildDropdown: function (servers) {
      for (var server in servers) {
        var option = new Option(server, server);
        ui.dropDowns.servers.element.appendChild(option);
      }
    }
  };

  ui.dropDowns.textSize = {
    element: document.getElementById('text-size')
  };

  ui.dropDowns.textColor = {
    element: document.getElementById('text-colors')
  };

  ui.inputs = {};

  ui.inputs.contentId = {
    element: document.getElementById('content-id')
  };

  ui.inputs.serverUrl = {
    element: document.getElementById('server-url')
  };

  ui.inputs.carrierId = {
    element: document.getElementById('carrier-id')
  };

  ui.inputs.appId = {
    element: document.getElementById('app-id')
  };

  ui.inputs.uat = {
    element: document.getElementById('uat')
  };

  ui.inputs.maxBandwidth = {
    element: document.getElementById('max-bandwidth')
  };

  ui.inputs.minBandwidth = {
    element: document.getElementById('min-bandwidth')
  };

  ui.inputs.live = {
    element: document.getElementById('content-LIVE')
  };

  ui.inputs.vod = {
    element: document.getElementById('content-VOD')
  };

  ui.spinner = {
    element: document.getElementsByClassName('spinner')[0],

    show: function () {
      this.element.style.display ='block';
    },

    hide: function () {
      this.element.style.display = 'none';
    }
  };

  ui.videoCover = {
    element: document.getElementsByClassName('cover')[0],

    show: function () {
      this.resize();
      this.element.style.backgroundColor = 'black';
    },

    hide: function () {
      this.element.style.backgroundColor = 'transparent'; 
    },

    /**
     * Couldn't find a nice way to cover the video with pure
     * CSS so this is my fallback solution.
     */ 
    resize: function () {
      var videobound = root.app.video.getBoundingClientRect();

      this.element.style.left = videobound.left + 'px';
      this.element.style.top  = videobound.top + 'px';
      this.element.style.bottom  = videobound.bottom + 'px';
      this.element.style.right  = videobound.right + 'px';
      this.element.style.width = videobound.width + 'px';
      this.element.style.height = videobound.height + 'px';
    }
  };

  ui.errorMessage = {
    elements: {
      messageContainer: document.getElementsByClassName('error-header')[0],

      messageText: document.getElementsByClassName('error-message')[0],

      closeButton: document.getElementsByClassName('error-close-button')[0]
    },

    set: function (error) {
      var message =  'Error Code: ' + error.publicErrorCode + '</br>';

      if (error.serverErrorMessage) {
        message += 'Server Error Message: ' + error.serverErrorMessage + '</br>';
      }

      if (error.internalErrorMessage) {
        message += 'Internal Error Message: ' + error.internalErrorMessage + '</br>';
      }

      this.elements.messageText.innerHTML = message;
    },

    show: function () {
      this.elements.messageContainer.classList.add('show');
    },

    hide: function () {
      this.elements.messageContainer.classList.remove('show');
    }
  };

  ui.errorMessage.elements.closeButton.addEventListener('click', 
        ui.errorMessage.hide.bind(ui.errorMessage));

  function buildTrackList(type, manifest, option) {
    var dropDown = ui.dropDowns[type].element;
    // Clear dropdown so on update we don't repeat
    // elements by appening tracks to the end of an 
    // existing list.
    dropDown.innerHTML = '';

    var tracks = manifest.getAllAvailableTracks()[type];
    var currentTrack = manifest.getAllSelectedTracks()[type];

    tracks.forEach(function (track) {
      dropDown.appendChild(option(track));
      if(track.id === currentTrack.id) {
        dropDown.selectedIndex = dropDown.length - 1;
      }
    });
  }

}(this))