'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('SchedulesCtrl', function ($scope, QuickPlayRequestsService) {
	var totalStartTime, totalEndTime;
	this.checkScheduleBoundaries = function(){
		QuickPlayRequestsService.getSchedulesData({pageNumber: "1", pageSize: "1000"}).then(function(data){
			console.log(data);

			totalStartTime = _.min(data.paginatedResources, function(item){
				return item.epgScheduleStartTimeMsUtc;
			}).epgScheduleStartTimeMsUtc;
			totalEndTime = _.max(data.paginatedResources, function(item){
				return item.epgScheduleEndTimeMsUtc;
			}).epgScheduleEndTimeMsUtc;

			$scope.intervalsNumber = 12;
			$scope.visibleIntervals = 5;
			$scope.intervalSizeSeconds = 1800;
			$scope.timelineStartTime = new Date(totalStartTime);
			$scope.timelineEndTime = new Date(totalEndTime);

		}, function(error){
			console.log("error", error)
		});
	};
	this.checkScheduleBoundaries();

	console.log($scope.timelineStartTime, $scope.timelineEndTime);

});
