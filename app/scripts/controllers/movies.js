'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('MoviesCtrl', function ($scope, QuickPlayRequestsService) {
	var currentRequest, movies = [];

	$scope.currentPage = 0;
	$scope.movies = [];

	for(var i = 0; i < 16; i++){
		movies.push({
			title: "title " + i
		});
	}
	$scope.movies = movies;

	$scope.getMovies = function(pageNumber){

		var params = {
			pageNumber: (pageNumber + 1).toString(),
			pageSize: "15"
		};

		currentRequest = QuickPlayRequestsService.moviesResourse.get(params);
		currentRequest.then(function(data){
			$scope.totalPages = data.header.totalPages;
			$scope.currentPage = pageNumber;
		}, function(error){
			console.log("error", error);
		});
	};

	$scope.changePage = function(pageNumber){
		currentRequest.reject({
			msg: "otherRequest"
		});
		$scope.getMovies(pageNumber);
	};

});
