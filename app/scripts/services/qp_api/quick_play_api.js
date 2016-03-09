'use strict';

angular.module('webPlayerApp').service('QuickPlayAPIService', function ($resource, QuickPlayConfigService) {
	var self = this;

	/*Common resources*/
	self.searchResourse = $resource(QuickPlayConfigService.host + '/search');

	self.containerResourse = $resource(QuickPlayConfigService.host + '/container/:id', {id: '@id'});


	/*Live-related resources*/
	//self.channelsResourse = $resource(QuickPlayConfigService.host + '/channels/:id', {id: '@id'});
	self.channelsResourse = $resource(QuickPlayConfigService.host + '/epgChannel/:id', {id: '@id'});

	self.programsResourse = $resource(QuickPlayConfigService.host + '/programs/:id', {id: '@id'});

	//self.shedulesResourse = $resource(QuickPlayConfigService.host + '/schedules/:id', {id: '@id'});
	self.shedulesResourse = $resource(QuickPlayConfigService.host + '/epgSchedule/:id', {id: '@id'});

	self.shedulesGridResourse = $resource(QuickPlayConfigService.host + '/epgGrid');

	self.specialLiveEventsResourse = $resource(QuickPlayConfigService.host + '/specialliveevents/:id', {id: '@id'});

	self.genresResourse = $resource(QuickPlayConfigService.host + '/genres/:id', {id: '@id'});


	/*VOD-related resources*/
	self.tvSeriesResourse = $resource(QuickPlayConfigService.host + '/tvseries/:id', {id: '@id'});

	self.tvSeriesSeasonResourse = $resource(QuickPlayConfigService.host + '/tvseriesseason/:id', {id: '@id'});

	self.tvEpisodesResourse = $resource(QuickPlayConfigService.host + '/tvepisodes/:id', {id: '@id'});

	self.moviesResourse = $resource(QuickPlayConfigService.host + '/movies/:id', {id: '@id'});

});
