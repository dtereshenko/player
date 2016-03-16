'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('SchedulesGridCtrl', function ($scope, QuickPlayRequestsService, QuickPlayParsersService) {
	var self = this;

	this.init = function(){
		self.getChannels();
	};

	this.getSchedulesGrid = function(channelsData){
		var params = {
			channelIds: channelsData.channelsIds.join(" "),
			startTimeMsUtc: $scope.timelineStartTime.getTime(),
			endTimeMsUtc: $scope.timelineEndTime.getTime(),
			pageSize: "1000"
		};
		QuickPlayRequestsService.getSchedulesGridData(params).then(function(data){
			var grid = QuickPlayParsersService.parseSchedulesList(data, params.startTimeMsUtc);
			self.finishDataModel(channelsData, grid);
		}, function(error){
			console.log("error", error);
		});
	};

	this.finishDataModel = function(channelsData, grid){
		_.each(grid, function(list){
			_.each(list.items, function(item){
				item.width = (item.duration/$scope.intervalSizeSeconds * (1/$scope.intervalsNumber * 100)) + "%";

			});
		});

		var mergedData = angular.merge(channelsData.channels, grid);
		$scope.channels = mergedData;


		//var channels = [],
		//	i = 0,
		//	types = ["episode", "competition", "movie"],
		//	genres = ["horror", "comedy", "tragedy"];
		//
		//for(i = 0; i < 7; i++){
		//	channels.push({name: "Channel " + i});
		//}
		//
		//var currentTime = (new Date((new Date()).toDateString())).getTime();
		//
		//_.each(channels, function(item){
		//	item.schedule = [];
		//	var startTime = currentTime, endTime, startDate, rnd, sign, duration;
		//	for(i = 0; i < 25; i++){
		//		rnd = Math.round(Math.random());
		//		sign = rnd < 1 ? -1 : 1;
		//		duration = (1800 + Math.round(Math.random()*sign*600));
		//		endTime = startTime + duration*1000;
		//
		//		startDate = (new Date(startTime)).toLocaleTimeString();
		//
		//		var scheduleItem = {
		//			type: types[Math.round(Math.random()*(types.length - 1))],
		//			title: item.name + " schedule " + i,
		//			startTime: startTime,
		//			endTime: endTime,
		//			startDate: startDate,
		//			duration: duration,
		//			width: (duration/$scope.intervalSizeSeconds * (1/$scope.intervalsNumber * 100)) + "%"
		//		};
		//
		//		switch(scheduleItem.type){
		//			case "episode":
		//				scheduleItem.episodeNumber = i + 1;
		//				scheduleItem.seasonNumber = i;
		//				scheduleItem.shortDescription = "e" + scheduleItem.episodeNumber + " s" + scheduleItem.seasonNumber;
		//				break;
		//			case "competition": scheduleItem.shortDescription = scheduleItem.type.toUpperCase(); break;
		//			case "movie": scheduleItem.shortDescription = genres[Math.round(Math.random()*(genres.length - 1))]; break;
		//			default: break;
		//		}
		//
		//		item.schedule.push(scheduleItem);
		//		startTime = endTime;
		//	}
		//});
		//
		//$scope.channels = channels;
		//
		//console.log(channels);
	};

	this.getChannels = function(){
		QuickPlayRequestsService.getChannelsData().then(function(data){
			var channelsData = QuickPlayParsersService.parseChannelsList(data);
			self.getSchedulesGrid(channelsData);

		}, function(error){
			console.log("error", error);
		});



	};
});
