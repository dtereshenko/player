'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('SearchCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {
	var loadedRequests = [], pageSize = 50;
	$scope.search = {};
	$scope.search.value = '';
	console.log($stateParams);

	$scope.$watch('search.value', function (newValue, oldValue) {
		if (newValue.length > 2){
			$scope.moviesPortion = [];
			$scope.paginationConfig.currentPage = 0;
			$scope.getSearch($scope.search.value, 0);
		}
	});
	$scope.toggleLoader(false);

	$scope.result = [];
	$scope.moviesPortion = [];
	//
	$scope.paginationConfig = {
		mode: 0,
		name: "searchPag",
		showMoreButton: false,
		currentPage: undefined,
		maxValue: $scope.result.length,
		perPagesArray: [16],
		needMoreData: false
	};

	$scope.getSearch = function(searchStr, pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			pageSize: pageSize,
			for: searchStr
		};
		QuickPlayRequestsService.getSearchData(params).then(function(data){
			var obj = QuickPlayParsersService.parseSearchList(data), result = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.toggleLoader(false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(loadedRequests, function(page){
				result = result.concat(page.items);
			});
			console.log(obj, result.length);
			$scope.result = result;

		}, function(error){
			$scope.toggleLoader(false);
			var obj = QuickPlayParsersService.createFakeSearchListData(params.pageSize, params.pageNumber);
			loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});

	}

	//$scope.getMovies = function(pageNumber){
	//	var params = {
	//		pageNumber: pageNumber + 1,
	//		pageSize: pageSize
	//	};
    //
	//	$scope.toggleLoader(true);
    //
	//	QuickPlayRequestsService.getMoviesData(params).then(function(data){
	//		var obj = QuickPlayParsersService.parseMoviesList(data), movies = [];
	//		loadedRequests[obj.pageNumber] = obj;
	//		$scope.toggleLoader(false);
	//		$scope.paginationConfig.maxValue = obj.totalItems;
    //
	//		_.each(loadedRequests, function(page){
	//			movies = movies.concat(page.items);
	//		});
	//		console.log(obj, movies.length);
	//		$scope.movies = movies;
    //
	//	}, function(error){
	//		$scope.toggleLoader(false);
	//		var obj = QuickPlayParsersService.createFakeMovieListData(params.pageSize, params.pageNumber);
	//		loadedRequests[obj.pageNumber] = obj;
	//		console.log("error", error);
	//	});
	//};
    //
	//$scope.getMovies(0);
    //
	$scope.$watch(function(){
			return $scope.paginationConfig.needMoreData;
		},
		function(newVal){
			console.log($scope.paginationConfig.currentPage);
			if(newVal){
				if(loadedRequests.length*pageSize < $scope.paginationConfig.maxValue) {
					$scope.getSearch($scope.search.value, loadedRequests.length)
				}
			}
		}
	);
});
