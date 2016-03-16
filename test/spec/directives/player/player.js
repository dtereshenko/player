describe("detectUtils", function () {
	var deviceDetector,
		osConstant,
		browserConstant,
		deviceConstant,
		util,
		$scope,
		element;

	function loadDetector(userAgent) {
		module("ng.deviceDetector");
		module('webPlayerApp');
		module('views/player/playerThird.html');
		module('views/player/playerSilverlight.html');
		module('views/player/playerSilverlightItem.html');
		module('views/player/playerHTML5.html');
		inject(["$window", function ($window) {
			var __originalNavigator = $window.navigator;
			$window.navigator = {};
			if ($window.navigator !== __originalNavigator) {
				$window.navigator.__proto__ = __originalNavigator;
			}
			$window.navigator.__defineGetter__('userAgent', function () {
				return userAgent;
			});
		}]);
		inject(["deviceDetector", "detectUtils", "DEVICES", "BROWSERS", "OS", function (deviceDetectorI, detectUtils, DEVICES, BROWSERS, OS) {
			deviceDetector = deviceDetectorI;
			osConstant = OS;
			browserConstant = BROWSERS;
			deviceConstant = DEVICES;
			util = detectUtils;
		}]);
	}

	describe("with ios an user-agent", function () {
		function describeUserAgent(userAgent, os, browser, device) {
			describe(userAgent, function () {
				beforeEach(function () {
					loadDetector(userAgent);
				});

				beforeEach(inject(function($rootScope){
					$scope = $rootScope.$new();
				}));

				it('should be third player for ios', inject(function($compile) {
					element = $compile('<div player></div>')($scope);
					$scope.$digest();
					expect(element.html()).toMatch(/Third player/);
				}));

			});
		}

		// Safari IOS
		describeUserAgent("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
			"ios", "safari", "ipad");
	});

	describe("with firefox", function () {
		function describeUserAgent(userAgent, os, browser, device) {
			describe(userAgent, function () {
				beforeEach(function () {
					loadDetector(userAgent);
				});

				beforeEach(inject(function($rootScope){
					$scope = $rootScope.$new();
				}));

				it('should be silverlight player', inject(function($compile) {
					element = $compile('<div player></div>')($scope);
					$scope.$digest();
					expect(element.html()).toMatch(/silverlight player/);
				}));

			});
		}

		//FireFox
		describeUserAgent("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0",
			"windows", "windows-xp", "firefox", "31.0", "unknown", false, false, true);
	});

	describe("with chrome", function () {
		function describeUserAgent(userAgent, os, browser, device) {
			describe(userAgent, function () {
				beforeEach(function () {
					loadDetector(userAgent);
				});

				beforeEach(inject(function($rootScope){
					$scope = $rootScope.$new();
				}));

				it('should be QuickPlay HTML5 player', inject(function($compile) {
					element = $compile('<div player></div>')($scope);
					$scope.$digest();
					expect(element.html()).toMatch(/id="video"/);
				}));

			});
		}

		// Chrome
		describeUserAgent("Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36",
			"windows", "windows-8-1", "chrome", "37.0.2049.0", "unknown", false, false, true);
	});
});

