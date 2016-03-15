'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:descoverySection
 * @description
 * # descoverySection
 */
angular.module('webPlayerApp')
	.directive('discoverySection', function () {
		return {
			template: '<div class="col-md-3 discovery-item" ui-sref="{{location}}">\
	  <h3>{{title}}</h3>\
		</div>',
			restrict: 'EA',
			scope: {
				title: '@',
				location: '@'
			},
			link: function postLink(scope, element, attrs) {
				//element.text('this is the descoverySection directive');
			}
		}
			;
	});
