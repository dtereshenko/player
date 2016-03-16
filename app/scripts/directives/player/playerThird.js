'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:playerHTML5
 * @description
 * # playerHTML5
 */
angular.module('webPlayerApp').directive('playerThird', function () {
	return {
		templateUrl: 'views/player/playerThird.html',
		restrict: 'A',
		scope: {},
		link: function postLink(scope, element, attrs) {

		}
	};
});
