'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('MoviesGridCtrl', function ($scope, $state, QuickPlayRequestsService, QuickPlayParsersService) {
	var loadedRequests = [], pageSize = 50;

	$scope.allData = [];
	$scope.dataPortion = [];

	$scope.paginationConfig = {
		mode: 0,
		name: "moviesPag",
		showMoreButton: false,
		currentPage: undefined,
		maxValue: $scope.allData.length,
		perPagesArray: [16],
		needMoreData: false
	};

	$scope.getDataPortion = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			pageSize: pageSize
		};

		$scope.$emit("toogleLoader", true);

		QuickPlayRequestsService.getMoviesData(params).then(function(data){
			var obj = QuickPlayParsersService.parseMoviesList(data), allData = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.$emit("toogleLoader", false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(loadedRequests, function(page){
				allData = allData.concat(page.items);
			});

			$scope.allData = allData;

		}, function(error){
			$scope.$emit("toogleLoader", false);
			var obj = QuickPlayParsersService.createFakeMovieListData(params.pageSize, params.pageNumber);
			loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.navigateToItem = function(item){

		$state.go("root.movie", {movieId: item.id})
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
