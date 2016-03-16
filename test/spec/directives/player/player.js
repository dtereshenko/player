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
				module("webPlayerApp");
				module('views/player/playerSilverlight.html');

				it("should return true for iOS1", function () {
					expect(util.isIOS()).toBeTruthy();
				});

				beforeEach(inject(["$rootScope", "$compile", function($rootScope, $compile){
					$scope = $rootScope.$new();
					element = $compile('<div player-silverlight></div>')($scope);
					$scope.$digest();
				}]));

				it('exposes the controller to the template', function(){
				//	element = $compile(angular.element('<div player-silverlight></div>') )($scope);
				//	$scope.$digest();
					$scope.$digest();
					expect(element.html()).toMatch(/silverlight/);
				});

			});
		}

		// Safari
		describeUserAgent("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
			"ios", "safari", "ipad");
	});
});


//
//	describe("with ios user-agent", function () {
//		function describeUserAgent(userAgent, os, browser, device) {
//			describe(userAgent, function () {
//				beforeEach(function () {
//					loadDetector(userAgent);
//					//module('webPlayerApp');
//					//module('views/player/playerThird.html');
//				});
//				it("should return true for iOS", function () {
//					expect(util.isIOS()).toBeTruthy();
//				});
//				//beforeEach(module('webPlayerApp'));
//				//beforeEach(module('views/player/playerThird.html'));
//				//beforeEach(module('views/player/playerHTML5.html'));
//				//beforeEach(module('views/player/playerSilverlight.html'));
//
//				//beforeEach(inject(function($rootScope){
//				//	$scope = $rootScope.$new();
//				//}));
//
//
//				//it('exposes the controller to the template', inject(function($compile) {
//				//	element = $compile('<div player-silverlight></div>')($scope);
//				//	$scope.$digest();
//				////	//console.log(element.html());
//				//	expect(element.html()).toMatch(/silverlight player/);
//				//}));
//
//
//			});
//		}
//
//		// Safari
//		describeUserAgent("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
//			"ios", "safari", "ipad");
//	});
//});
//
