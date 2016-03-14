'use strict';

angular.module('webPlayerApp').controller('MovieCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {
	var pageSize = 8;
	$scope.movie = {};
	$scope.tabsObject = {
		about: {title: "About", id: "about", active: true},
		more: {title: "More like this", id: "more", active: false}
	};

	$scope.toggleTab = function(tab){
		_.each($scope.tabsObject, function(item){
			item.active = false;
		});
		tab.active = true;
	};

	$scope.getMoreLikeThis = function(objParams){
		var params = {
			pageNumber: 1,
			pageSize: pageSize
		};
		angular.merge(params, objParams);
		QuickPlayRequestsService.getMoreLikeThis(params).then(function(data){
			console.log(data)
		}, function(error){
			console.log("error", error);
		});
	};

	$scope.getMovie = function(){
		var params = {
			id: $stateParams.movieId,
			deliveryMethod: "deliveryMethod"
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getMoviesDataById(params).then(function(data){
			$scope.movie = QuickPlayParsersService.parseSingleMovie(data);
			$scope.getMoreLikeThis($scope.movie.links);
			$scope.toggleLoader(false);
		}, function(error){
			console.log("error", error);
		});
	};

	$scope.getMovie();
});
