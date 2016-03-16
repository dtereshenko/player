'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:channelPillar
 * @description
 * # channelPillar
 */
angular.module('webPlayerAppDirectives')
	.directive('channelPillar', function () {
		return {
			templateUrl: 'views/templates/channel_pillar.html',
			restrict: 'EA',
			scope: {
				name: '@',
				description: '@',
				location: '@'
			},
			replace: true,
			link: function postLink(scope, element, attrs) {
				//element.text('this is the channelPillar directive');
			}
		};
	});
