'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:playerHTML5
 * @description
 * # playerHTML5
 */
angular.module('webPlayerApp').directive('playerHtml', function () {
	return {
		templateUrl: 'views/player/playerHTML5.html',
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
		},
		compile: function(element){
			var ui = angular.element('<script>').attr('src', 'HTML5/ui.js');
			var app = angular.element('<script>').attr('src', 'HTML5/app.js');
			var vstb = angular.element('<script>').attr('src', 'HTML5/vstb-library.debug.js');

			element.append(ui).append(app).append(vstb);
		}
	};
});
