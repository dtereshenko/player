'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('MoviesGridCtrl', function ($scope, $controller, QuickPlayRequestsService, QuickPlayParsersService) {
	var self = this;
	angular.extend(this, $controller('GridCtrl', {$scope: $scope}));

	angular.merge($scope.paginationConfig, {
		name: "moviesPag",
		perPagesArray: [16]
	});

	$scope.getDataPortion = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			pageSize: self.pageSize
		};

		$scope.$emit("toogleLoader", true);

		QuickPlayRequestsService.getMoviesData(params).then(function(data){
			var obj = QuickPlayParsersService.parseMoviesList(data), allData = [];
			self.loadedRequests[obj.pageNumber] = obj;
			$scope.$emit("toogleLoader", false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(self.loadedRequests, function(page){
				allData = allData.concat(page.items);
			});

			$scope.allData = allData;

		}, function(error){
			$scope.$emit("toogleLoader", false);
			var obj = QuickPlayParsersService.createFakeMovieListData(params.pageSize, params.pageNumber);
			self.loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.getDataPortion(0);
});
