'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:channelPillar
 * @description
 * # channelPillar
 */
angular.module('webPlayerApp')
	.directive('channelPillar', function () {
		return {
			template: '<div class="col-md-3 discovery-item">\
	  <h2>{{name}}</h2>\
	  <h3>{{description}}</h3>\
	  </div>',
			restrict: 'EA',
			scope: {
				name: '@',
				description: '@'
			},
			link: function postLink(scope, element, attrs) {
				//element.text('this is the channelPillar directive');
			}
		};
	});
