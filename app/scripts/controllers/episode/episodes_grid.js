'use strict';

angular.module('webPlayerApp').controller('EpisodesGridCtrl', function ($scope, $controller, QuickPlayRequestsService, QuickPlayParsersService) {
	var self = this;
	angular.extend(this, $controller('GridCtrl', {$scope: $scope}));

	angular.merge($scope.paginationConfig, {
		name: "showsPag",
		perPagesArray: [16]
	});

	$scope.getDataPortion = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			language: "Eng",
			country: "Ca",
			pageSize: self.pageSize,
			parentId: $scope.additionalData.parentId,
			parentType: $scope.additionalData.parentType
		};

		$scope.$emit("toogleLoader", true);

		QuickPlayRequestsService.getTVEpisodesData(params).then(function(data){
			var obj = QuickPlayParsersService.parseTVEpisodesList(data), allData = [];
			self.loadedRequests[obj.pageNumber] = obj;
			$scope.$emit("toogleLoader", false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(self.loadedRequests, function(page){
				allData = allData.concat(page.items);
			});

			$scope.allData = allData;
			$scope.additionalData.result = allData;

		}, function(error){
			$scope.$emit("toogleLoader", false);
			var obj = QuickPlayParsersService.createFakeTVSeriesListData(params.pageSize, params.pageNumber);
			self.loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.$watch(function() {
			return $scope.additionalData.parentId
		}, function(newVal) {
			if (!_.isUndefined(newVal)) {
				$scope.getDataPortion(0);
			}
		}
	);

});
