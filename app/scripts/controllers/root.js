'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('RootCtrl', function ($scope, $timeout) {
	$scope.showFullScreenLoader = true;

	$timeout(function(){
		$scope.showFullScreenLoader = false;
	}, 1000);
});
