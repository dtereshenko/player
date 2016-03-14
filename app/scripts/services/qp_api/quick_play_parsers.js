/**
 * Created by Anton_Ovcharuk on 3/3/2016.
 */
'use strict';

angular.module('webPlayerApp').service('QuickPlayParsersService', function () {
	var self = this;

	function convertMsToTime(ms){
		var x = ms / 1000, seconds = x % 60, minutes, hours;
		x = (x - seconds)/60;
		minutes = x%60;
		x = (x - minutes)/60;
		hours = x%24;
		seconds =  seconds < 10 ? "0" + seconds : seconds.toString();
		minutes =  minutes < 10 ? "0" + minutes : minutes.toString();
		hours =  hours < 10 ? "0" + hours : hours.toString();
		return [hours, minutes, seconds]
	}

	function parseQueryString(uri){
		var queryString = {}, result = {};
		uri.replace(
			new RegExp("([^?=&]+)(=([^&]*))?", "g"),
			function($0, $1, $2, $3) { queryString[$1] = $3; }
		);
		_.each(queryString, function(item, key){
			if(!_.isUndefined(item)){
				result[key] = item;
			}
		});
		return result;
	}

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

	self.createFakeMovieListData = function(pageSize, pageNumber){
		var arr = [], i;
		for(i = 0 ; i < pageSize; i++){
			arr.push({
				image: "",
				title: "Error",
				id: ""
			});
		}
		return {items: arr, pageNumber: pageNumber, loaded: false}
	};

	self.createFakeMoreLikeThisListData = function(pageSize, pageNumber){
		var arr = [], i;
		for(i = 0 ; i < pageSize; i++){
			arr.push({
				image: "",
				title: "Error",
				id: ""
			});
		}
		return {items: arr, pageNumber: pageNumber, loaded: false}
	};

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
	};

	self.parseMoviesList = function(list){
		var filteredData = {items: []};
		_.each(list.paginatedResources, function(item){
			filteredData.items.push({
				genres: item.genres,
				image: item.images.length > 0 ? item.images[0].url : "",
				recoKeyVod: item.recoKeyVod,
				title: item.name,
				id: item.id
			});
		});
		filteredData.pageNumber = Number(list.header.pageNumber) - 1;
		filteredData.totalItems = Number(list.header.totalElements);
		filteredData.loaded = true;
		return filteredData;
	};

	self.parseSingleMovie = function(data){
		var resource = data.mainResource.resource;

		return {
			id: resource.id,
			recoKeyVod: resource.recoKeyVod,
			advisory: resource.advisory,
			freeTrial: resource.freeTrial,
			rental: resource.rental,
			rentalDurationMs: resource.rentalDurationMs,
			currency: resource.currency,
			kidsFeaturedFlag: resource.kidsFeaturedFlag,
			kidsFeaturedOrder: resource.kidsFeaturedOrder,
			featuredFlag: resource.featuredFlag,
			featuredOrder: resource.featuredOrder,
			mostWatchedFlag: resource.mostWatchedFlag,
			mostWatchedOrder: resource.mostWatchedOrder,
			mostWatched: resource.mostWatched,
			defaultOrder: resource.defaultOrder,
			runningTimeMs: resource.runningTimeMs,
			links: parseQueryString(resource.links.moreLikeThis),

			dataForView:{
				genres: resource.genres,
				image: resource.images.length > 0 ? resource.images[0].url : "",
				actors: _.filter(resource.people, function(item){return item.role.toLowerCase() === "cast"}),
				directors: _.filter(resource.people, function(item){return item.role.toLowerCase() === "director"}),
				providerId: resource.providerId,
				releaseYear: resource.releaseYear,
				title: resource.name,
				expiryTsMs: new Date(resource.expiryTsMs),
				description: resource.description,
				ageRating: resource.ageRating,
				keywords: resource.keywords,
				duration: convertMsToTime(resource.runningTimeMs).join(":")
			}
		};
	};

	self.parseMoreLikeThisList = function(list){
		var filteredData = {items: []};
		_.each(list.paginatedResources, function(item){
			filteredData.items.push({
				image: (_.isObject(item.images) && item.images.length > 0) ? item.images[0].url : "",
				title: item.name,
				id: item.id
			});
		});
		filteredData.pageNumber = Number(list.header.pageNumber) - 1;
		filteredData.totalItems = Number(list.header.totalElements);
		filteredData.loaded = true;
		return filteredData;
	}
});
