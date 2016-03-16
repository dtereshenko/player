/**
 * Created by Anton_Ovcharuk on 3/15/2016.
 */
'use strict';

angular.module('webPlayerApp').controller('ShowCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {
	$scope.show = {};

	$scope.getShow = function(){
		var params = {
			language: "Eng",
			country: "Ca",
			id: $stateParams.showId
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getTVSeriesDataById(params).then(function(data){
			$scope.show = QuickPlayParsersService.parseSingleTVSeries(data);
			if($scope.show.seasons.length === 0){
				$scope.show.episodes = {
					parentType: $scope.show.type,
					parentId: $scope.show.id
				}
			}

			$scope.toggleLoader(false);
		}, function(error){
			console.log("error", error);
		});
	};


	$scope.getShow();
});
