'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:loader
 * @description
 * # loader
 */
angular.module('webPlayerApp').directive('loader', function () {
	return {
		templateUrl: 'views/templates/loader.html',
		restrict: 'A',
		//replace: true,
		link: function postLink(scope, element, attrs) {

		}
	};
});
