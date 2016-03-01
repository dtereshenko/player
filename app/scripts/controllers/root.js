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

	$scope.toggleLoader = function(){
		$scope.showFullScreenLoader = !$scope.showFullScreenLoader;
	};

	$timeout(function(){
		$scope.toggleLoader();
	}, 1000);
});
