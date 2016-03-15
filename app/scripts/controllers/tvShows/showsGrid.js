'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('ShowsGridCtrl', function ($scope, $state, QuickPlayRequestsService, QuickPlayParsersService) {
	var loadedRequests = [], pageSize = 50;

	$scope.allData = [];
	$scope.dataPortion = [];
	$scope.resizeMode = "height";

	$scope.paginationConfig = {
		mode: 0,
		name: "showsPag",
		showMoreButton: false,
		currentPage: undefined,
		maxValue: $scope.allData.length,
		perPagesArray: [16],
		needMoreData: false
	};

	$scope.getDataPortion = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			language: "Eng",
			country: "Ca",
			pageSize: pageSize
		};

		$scope.$emit("toogleLoader", true);

		QuickPlayRequestsService.getTVSeriesData(params).then(function(data){
			var obj = QuickPlayParsersService.parseTVSeriesList(data), allData = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.$emit("toogleLoader", false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(loadedRequests, function(page){
				allData = allData.concat(page.items);
			});

			$scope.allData = allData;

		}, function(error){
			$scope.$emit("toogleLoader", false);
			var obj = QuickPlayParsersService.createFakeTVSeriesListData(params.pageSize, params.pageNumber);
			loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.navigateToItem = function(item){
		switch(item.type.toLowerCase()){
			case "tvseries": $state.go("root.tvShow", {showId: item.id}); break;
			case "movie": $state.go("root.movie", {movieId: item.id}); break;
			default: console.log("unexpected item type"); break;
		}
	};

	$scope.$watch(function(){
			return $scope.paginationConfig.needMoreData;
		},
		function(newVal){
			if(newVal){
				if(loadedRequests.length*pageSize < $scope.paginationConfig.maxValue) {
					$scope.getDataPortion(loadedRequests.length);
				}
			}
		}
	);

	$scope.getDataPortion(0);
});
