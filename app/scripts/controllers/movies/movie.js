'use strict';

angular.module('webPlayerApp').controller('MovieCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {

	$scope.movie = {};

	$scope.getMovie = function(){
		var params = {
			id: $stateParams.movieId,
			deliveryMethod: "deliveryMethod"
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
