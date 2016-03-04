'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('SchedulesCtrl', function ($scope, $timeout) {


	$scope.intervalsNumber = 12;
	$scope.visibleIntervals = 5;
	$scope.intervalSizeSeconds = 1800;
	$scope.timelineStartTime = (new Date((new Date()).toDateString())).getTime();
	console.log($scope.timelineStartTime)

});
