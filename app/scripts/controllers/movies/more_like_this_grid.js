'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('GetMoreLikeThisCtrl', function ($scope, $state, $element, QuickPlayRequestsService, QuickPlayParsersService) {
	var loadedRequests = [], pageSize = 50;

	$scope.allData = [];
	$scope.dataPortion = [];
	$scope.resizeMode = "height";
	$scope.paginationConfig = {
		mode: 0,
		name: "moreLikeThisPag",
		showMoreButton: false,
		currentPage: undefined,
		maxValue: $scope.allData.length,
		perPagesArray: [8],
		needMoreData: false
	};

	$scope.getDataPortion = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			pageSize: pageSize
		};
		angular.merge(params, $scope.additionalData);
		QuickPlayRequestsService.getMoreLikeThis(params).then(function(data){
			var obj = QuickPlayParsersService.parseMoreLikeThisList(data), allData = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(loadedRequests, function(page){
				allData = allData.concat(page.items);
			});

			$scope.allData = allData;

		}, function(error){
			var obj = QuickPlayParsersService.createFakeMoreLikeThisListData(params.pageSize, params.pageNumber);
			loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});
	};

	$scope.navigateToItem = function(item){
		$state.go("root.movie", {movieId: item.id})
	};


	$scope.$watch(function(){
			return $scope.paginationConfig.needMoreData;
		},
		function(newVal){
			if(newVal){
				if(loadedRequests.length*pageSize < $scope.paginationConfig.maxValue) {

					$scope.getDataPortion(loadedRequests.length);
				}
			}
		}
	);

	$scope.$watch("additionalData", function(newVal){
		if(!_.isUndefined(newVal)){
			$scope.getDataPortion(0);
		}
	});

	$scope.$watch("additionalData", function(newVal){
		if(!_.isUndefined(newVal)){
			$scope.$broadcast("resetSizes", true)
		}
	});


	$scope.$watch(function(){
			return $element[0].offsetHeight
		}, function(newVal){
			if(newVal){
				$scope.$broadcast("resetSizes", true)
		}
	});



});
