/**
 * Created by Anton_Ovcharuk on 3/15/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('GridCtrl', function ($scope, $state, QuickPlayRequestsService, QuickPlayParsersService) {
	var self = this;
	this.loadedRequests = [];
	this.pageSize = 50;

	$scope.allData = [];
	$scope.dataPortion = [];
	$scope.resizeMode = "height";

	$scope.paginationConfig = {
		mode: 0,
		name: "",
		showMoreButton: false,
		currentPage: undefined,
		maxValue: $scope.allData.length,
		perPagesArray: [8],
		needMoreData: false
	};

	$scope.navigateToItem = function(item){
		switch(item.type.toLowerCase()){
			case "tvseries": $state.go("root.show", {showId: item.id}); break;
			case "movie": $state.go("root.movie", {movieId: item.id}); break;
			case "tvepisodes": $state.go("root.show.episode", {episodeId: item.id, showId: item.showId}); break;
			case "tvseriesseason": $state.go("root.show.season", {seasonId: item.id, showId: item.showId}); break;
			default: console.log("unexpected item type", item.type.toLowerCase()); break;
		}
	};

	$scope.getDataPortion = function(pageNumber) {

	};

	$scope.$watch(function(){
			return $scope.paginationConfig.needMoreData;
		},
		function(newVal){
			if(newVal){
				if(self.loadedRequests.length*self.pageSize < $scope.paginationConfig.maxValue) {
					$scope.getDataPortion(self.loadedRequests.length);
				}
			}
		}
	);
});
