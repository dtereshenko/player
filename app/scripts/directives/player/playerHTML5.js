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
		}
	};
});
