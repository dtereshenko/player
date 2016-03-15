describe("playerSwitch", function () {
	var deviceDetector,
		osConstant,
		browserConstant,
		deviceConstant,
		util,
		$compile,
		$rootScope;


	function loadDetector(userAgent) {
		module(["ng.deviceDetector", "webPlayerApp"]);
		//module();
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

		//inject(["_$compile_", "_$rootScope_", function(_$compile_, _$rootScope_){
		//	// The injector unwraps the underscores (_) from around the parameter names when matching
		//	$compile = _$compile_;
		//	$rootScope = _$rootScope_;
		//}])
	}

	describe("with ios user-agent", function () {
		function describeUserAgent(userAgent, os, browser, device) {
			describe(userAgent, function () {
				beforeEach(function () {
					loadDetector(userAgent);
				});

				//beforeEach(module('webPlayerApp'));

				//var playerDirective = $compile("<player></player>")($rootScope);
				//$rootScope.$digest();
				//console.log(playerDirective);

				//console.log('any');

				//it("should return true for iOS", function () {
				//	expect(util.isIOS()).toBeTruthy();
				//});
                //
				//it("should return true for isMobile ", function () {
				//	expect(util.isMobile()).toBeTruthy();
				//});
                //
				//it("should return false for isAndroid ", function () {
				//	expect(util.isAndroid()).toBeFalsy();
				//});
			});
		}

		// Safari
		describeUserAgent("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
			"ios", "safari", "ipad");
	});
});

