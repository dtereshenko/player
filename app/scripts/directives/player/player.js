'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:playerHTML5
 * @description
 * # playerHTML5
 */
angular.module('webPlayerApp').directive('player', function (deviceDetector) {
	var device = deviceDetector;
	return {
		restrict: 'EA',
		scope: {},
		templateUrl: function(element, attributes){
			if (device.os === 'ios' || device.os === 'android'){
				return 'views/player/playerThird.html';
			} else
			if (device.browser === 'chrome' && device.device === 'unknown'){
				return 'views/player/playerHTML5.html';
			} else
			if (device.browser !== 'chrome' && device.device === 'unknown'){
				return 'views/player/playerSilverlight.html';
			} else {
				return 'views/player/default.html';
			}
		},
		link: function(scope, element, attrs) {

		},
		compile: function(element){
			if (device.browser === 'chrome' && device.device === 'unknown'){
				var ui = angular.element('<script>').attr('src', 'HTML5/ui.js');
				var app = angular.element('<script>').attr('src', 'HTML5/app.js');
				var vstb = angular.element('<script>').attr('src', 'HTML5/vstb-library.debug.js');

				element.append(ui).append(app).append(vstb);
			}
		}
	};
});
