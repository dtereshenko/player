'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('ForMeCtrl', function ($scope, QuickPlayRequestsService, QuickPlayParsersService) {
	var loadedRequests = [], pageSize = 8;

	$scope.movies = [];
	$scope.recomended = [];
	//$scope.newPortion = [];



	$scope.getNew = function(pageNumber){
		var params = {
			pageNumber: 0,
			pageSize: 4,
			containerId: 'Featured',
			id: 'Featured',
			sortPaginatedBy: 'releaseYear DESC'
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getContainerData(params).then(function(data){
			var obj = QuickPlayParsersService.parseResourceList(data), movies = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.toggleLoader(false);
			//$scope.paginationConfig.maxValue = obj.totalItems;

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

	$scope.getRecomended = function(){
		var params = {
			pageNumber: 0,
			pageSize: 8,
			id: 'Featured',
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getContainerData(params).then(function(data){
			var obj = QuickPlayParsersService.parseResourceList(data), movies = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.toggleLoader(false);
			//$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(loadedRequests, function(page){
				movies = movies.concat(page.items);
			});
			console.log(obj, movies.length);
			$scope.recomended = movies;

		}, function(error){
			$scope.toggleLoader(false);
			var obj = QuickPlayParsersService.createFakeMovieListData(params.pageSize, params.pageNumber);
			loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.getNew(0);
	$scope.getRecomended(0);

});
