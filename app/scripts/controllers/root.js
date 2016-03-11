'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('RootCtrl', function ($scope) {
	$scope.showFullScreenLoader = false;

	$scope.toggleLoader = function (bool) {
		$scope.showFullScreenLoader = _.isUndefined(bool) ? !$scope.showFullScreenLoader : bool;
	};
});
