'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('MoreLikeThisCtrl', function ($scope, $controller, $element, QuickPlayRequestsService, QuickPlayParsersService) {
	var self = this;
	angular.extend(this, $controller('GridCtrl', {$scope: $scope}));

	angular.merge($scope.paginationConfig, {
		name: "moreLikeThisPag"
	});

	$scope.getDataPortion = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			pageSize: self.pageSize
		};
		angular.merge(params, $scope.additionalData);
		QuickPlayRequestsService.getMoreLikeThis(params).then(function(data){
			var obj = QuickPlayParsersService.parseMoreLikeThisList(data), allData = [];
			self.loadedRequests[obj.pageNumber] = obj;
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(self.loadedRequests, function(page){
				allData = allData.concat(page.items);
			});

			$scope.allData = allData;

		}, function(error){
			var obj = QuickPlayParsersService.createFakeMoreLikeThisListData(params.pageSize, params.pageNumber);
			self.loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.$watch("additionalData", function(newVal){
		if(!_.isUndefined(newVal)){
			$scope.getDataPortion(0);
		}
	});

	$scope.$watch(function(){
			return $element[0].offsetHeight;
		}, function(newVal){
			if(newVal > 0){
				$scope.$broadcast("resetSizes", {reset: true});
			}
		},
		true
	);



});
