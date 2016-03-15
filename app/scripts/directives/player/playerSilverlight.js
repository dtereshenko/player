'use strict';

/**
 * @ngdoc directive
 * @name webPlayerApp.directive:playerHTML5
 * @description
 * # playerHTML5
 */
angular.module('webPlayerApp').directive('playerSilverlight', function () {
	return {
		templateUrl: 'views/player/playerSilverlight.html',
		restrict: 'A',
		link: function(scope, element, attrs) {
		}
	};
})
	.directive('silverlightObject', function(){
		return {
			templateUrl: 'views/player/playerSilverlightItem.html',
			restrict: 'A',
			//replace: true,
			link: function(scope, element, attrs) {

			}
		};
	});
