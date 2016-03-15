/**
 * Created by Anton_Ovcharuk on 3/14/2016.
 */
angular.module('webPlayerApp').controller('SearchGridCtrl', function ($scope, $state, $element, QuickPlayRequestsService, QuickPlayParsersService) {
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
			pageSize: pageSize,
			for: $scope.additionalData.searchStr
		};
		angular.merge(params, $scope.additionalData);
		$scope.$emit("toogleLoader", true);
		QuickPlayRequestsService.getSearchData(params).then(function(data){
			var obj = QuickPlayParsersService.parseSearchList(data), allData = [];
			loadedRequests[obj.pageNumber] = obj;
			$scope.$emit("toogleLoader", false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(loadedRequests, function(page){
				allData = allData.concat(page.items);
			});
			console.log(obj, allData.length);
			$scope.allData = allData;
			$scope.additionalData.result = allData;
		}, function(error){
			$scope.$emit("toogleLoader", false);
			var obj = QuickPlayParsersService.createFakeSearchListData(params.pageSize, params.pageNumber);
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

	$scope.$watch("additionalData.searchStr", function(newVal){
		if(!_.isUndefined(newVal) && newVal.length > 2){
			$scope.getDataPortion(0);
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
