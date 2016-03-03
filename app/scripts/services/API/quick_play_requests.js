/**
 * Created by Anton_Ovcharuk on 3/3/2016.
 */
'use strict';

angular.module('webPlayerApp').service('QuickPlayRequestsService', function (QuickPlayAPIService, QuickPlayConfigService, $q) {
	var self = this;


	function createRejectingPromise(){
		var d = $q.defer();
		d.reject({msg: "Resourse Id is empty."});
		return d.promise;
	}

	/*Requests to common resources*/
	self.getSearchData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.searchResourse.get(requestParams).$promise;
	};

	self.getContainerData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.containerResourse.get(requestParams).$promise;
	};

	self.getContainerDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getContainerData(params);
	};


	/*Requests to Live-related resources*/
	self.getChannelsData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.channelsResourse.get(requestParams).$promise;
	};

	self.getChannelsDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getChannelsData(params);
	};

	self.getProgramsData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.programsResourse.get(requestParams).$promise;
	};

	self.getProgramsDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getProgramsData(params);
	};

	self.getShedulesData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.shedulesResourse.get(requestParams).$promise;
	};

	self.getShedulesDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getShedulesData(params);
	};

	self.getSpecialLiveEventsData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.specialLiveEventsResourse.get(requestParams).$promise;
	};

	self.getSpecialLiveEventsDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getSpecialLiveEventsData(params);
	};

	self.getGenresData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.genresResourse.get(requestParams).$promise;
	};

	self.getGenresDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getGenresData(params);
	};

	/*Requests to VOD-related resources*/
	self.getTVSeriesData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.tvSeriesResourse.get(requestParams).$promise;
	};

	self.getTVSeriesDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getTVSeriesData(params);
	};

	self.getTVSeriesSeasonData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.tvSeriesSeasonResourse.get(requestParams).$promise;
	};

	self.getTVSeriesSeasonDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getTVSeriesSeasonData(params);
	};

	self.getTVEpisodesData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.tvEpisodesResourse.get(requestParams).$promise;
	};

	self.getTVEpisodesDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getTVEpisodesData(params);
	};

	self.getMoviesData = function(params){
		var requestParams = angular.merge({}, QuickPlayConfigService.staticParams, params);
		return QuickPlayAPIService.moviesResourse.get(requestParams).$promise;
	};

	self.getMoviesDataById = function(params){
		return (_.isUndefined(params) || _.isUndefined(params.id)) ? createRejectingPromise() : self.getMoviesData(params);
	};
});
