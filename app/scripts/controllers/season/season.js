/**
 * Created by Anton_Ovcharuk on 3/15/2016.
 */
'use strict';

angular.module('webPlayerApp').controller('SeasonCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {
	$scope.season = {};
	$scope.episodes = {};

	$scope.getSeason = function(){
		var params = {
			language: "Eng",
			country: "Ca",
			id: $stateParams.seasonId
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getTVSeriesSeasonDataById(params).then(function(data){
			$scope.season = QuickPlayParsersService.parseSingleTVSeriesSeason(data);
			$scope.episodes = {
				parentType: $scope.season.type,
				parentId: $scope.season.id
			};

			$scope.toggleLoader(false);
		}, function(error){
			console.log("error", error);
		});
	};


	$scope.getSeason();
});
