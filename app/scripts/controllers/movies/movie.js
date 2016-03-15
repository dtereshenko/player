'use strict';

angular.module('webPlayerApp').controller('MovieCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {
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

	$scope.getMovie = function(){
		var params = {
			id: $stateParams.movieId,
			deliveryMethod: "streaming"
		};

		$scope.toggleLoader(true);

		QuickPlayRequestsService.getMoviesDataById(params).then(function(data){
			$scope.movie = QuickPlayParsersService.parseSingleMovie(data);
			$scope.toggleLoader(false);
		}, function(error){
			console.log("error", error);
		});
	};

	$scope.getMovie();
});
