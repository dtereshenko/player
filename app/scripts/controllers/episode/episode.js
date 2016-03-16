/**
 * Created by Anton_Ovcharuk on 3/15/2016.
 */
'use strict';

angular.module('webPlayerApp').controller('EpisodeCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {
	$scope.episode = {};

	$scope.getEpisode = function(){
		var params = {
			language: "Eng",
			country: "Ca",
			id: $stateParams.episodeId
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getTVEpisodesDataById(params).then(function(data){
			$scope.episode = QuickPlayParsersService.parseSingleEpisode(data);
			$scope.toggleLoader(false);
			console.log($scope.episode);
		}, function(error){
			console.log("error", error);
		});
	};

	$scope.getEpisode();
});
