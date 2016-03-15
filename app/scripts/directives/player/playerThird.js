'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:playerHTML5
 * @description
 * # playerHTML5
 */
angular.module('webPlayerApp').directive('playerThird', function () {
	return {
		template: '<div>html5 player</div>',
		restrict: 'A',
		link: function postLink(scope, element, attrs) {

		}
	};
});
