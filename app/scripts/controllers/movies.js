'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('MoviesCtrl', function ($scope, QuickPlayRequestsService, QuickPlayParsersService) {
	var loadedRequests = [], pageSize = 50;

	$scope.movies = [];
	$scope.moviesPortion = [];

	$scope.paginationConfig = {
		mode: 0,
		name: "moviesPag",
		showMoreButton: false,
		currentPage: undefined,
		maxValue: $scope.movies.length,
		perPagesArray: [16],
		needMoreData: false
	};



	$scope.getMovies = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			pageSize: pageSize
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getMoviesData(params).then(function(data){
			var obj = QuickPlayParsersService.parseMoviesList(data), movies = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.toggleLoader(false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(loadedRequests, function(page){
				movies = movies.concat(page.items);
			});
			console.log(obj, movies.length);
			$scope.movies = movies;

		}, function(error){
			$scope.toggleLoader(false);
			var obj = QuickPlayParsersService.createFakeMovieListData(params.pageSize, params.pageNumber);
			loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.getMovies(0);

	$scope.$watch(function(){
			return $scope.paginationConfig.needMoreData;
		},
		function(newVal){
			console.log($scope.paginationConfig.currentPage);
			if(newVal){
				if(loadedRequests.length*pageSize < $scope.paginationConfig.maxValue) {
					$scope.getMovies(loadedRequests.length)
				}
			}
		}
	);
});
