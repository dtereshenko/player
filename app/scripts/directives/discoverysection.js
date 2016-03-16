'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:descoverySection
 * @description
 * # descoverySection
 */
angular.module('webPlayerAppDirectives')
	.directive('discoverySection', function () {
		return {
			templateUrl: 'views/templates/discovery_section.html',
			restrict: 'EA',
			scope: {
				title: '@',
				location: '@'
			},
			replace: true,
			link: function postLink(scope, element, attrs) {
				//element.text('this is the descoverySection directive');
			}
		};
	});
