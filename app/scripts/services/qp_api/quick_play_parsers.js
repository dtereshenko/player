/**
 * Created by Anton_Ovcharuk on 3/3/2016.
 */
'use strict';

angular.module('webPlayerApp').service('QuickPlayParsersService', function () {
	var self = this;

	function createEmptyScheduleItem(startTime, endTime){
		console.log(new Date(startTime), new Date(endTime));
		return {
			title: "",
			startTime: startTime,
			endTime: endTime,
			duration: Math.abs(endTime - startTime)/1000,
			startDate: "",
			isEmpty: true
		};
	}

	self.parseSchedulesList = function(list, timelineStartTime){
		var parsedObject = {}, filteredData = {}, startTime;
		parsedObject = _.groupBy(list.paginatedResources, function(item){return item.epgChannelId});
		console.log(parsedObject);

		parsedObject = _.each(parsedObject, function(list, key){
			parsedObject[key] = _.sortBy(list, function(item){return item.epgScheduleStartTimeMsUtc});
			filteredData[key] = {items: []};
			var startTime = timelineStartTime;
			_.each(list, function(item){
				var startDate = (new Date(item.epgScheduleStartTimeMsUtc)).toLocaleString();

				if(!_.isUndefined(startTime) && (startTime !== item.epgScheduleStartTimeMsUtc)){

					filteredData[key].items.push(createEmptyScheduleItem(startTime, item.epgScheduleStartTimeMsUtc));
				}
				filteredData[key].items.push({
					title: item.epgProgramTitle,
					startTime: item.epgScheduleStartTimeMsUtc,
					endTime: item.epgScheduleEndTimeMsUtc,
					duration: item.epgScheduleDurationSec,
					startDate: startDate
				});
				startTime = item.epgScheduleEndTimeMsUtc;
			});
		});

		//_.each(parsedObject, function(list, key){
		//	console.log(key);
		//	_.each(list, function(item){
		//		console.log((new Date(item.epgScheduleStartTimeMsUtc)).toLocaleString(), "-", (new Date(item.epgScheduleEndTimeMsUtc)).toLocaleString());
		//	});
		//	console.log("=========")
		//});

		//console.log(parsedObject);
		return filteredData;
	};

	self.parseChannelsList = function(list){
		var filteredData = {channels: {}, channelsIds: []};
		_.each(list.paginatedResources, function(item){
			filteredData.channels[item.epgChannelId] = {
				description: item.epgChannelDescription,
				channelId: item.epgChannelId,
				title: item.epgChannelTitle
			};
			filteredData.channelsIds.push(item.epgChannelId)
		});
		return filteredData;
	};

	self.parseSchedulesGridList = function(list){
		var parsedObject = _.groupBy(list.paginatedResources, function(item){return item.epgChannelId});
		console.log(list);
		//return filteredData;
	}
});
