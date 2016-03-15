/**
 * Created by Anton_Ovcharuk on 3/14/2016.
 */
angular.module('webPlayerApp').controller('SearchGridCtrl', function ($scope, $controller, $element, QuickPlayRequestsService, QuickPlayParsersService) {
	var self = this;
	angular.extend(this, $controller('GridCtrl', {$scope: $scope}));

	angular.merge($scope.paginationConfig, {
		name: "searchPag",
		perPagesArray: [8]
	});

	$scope.getDataPortion = function(pageNumber){
		var params = {
			pageNumber: pageNumber + 1,
			pageSize: self.pageSize,
			for: $scope.additionalData.searchStr
		};
		angular.merge(params, $scope.additionalData);
		$scope.$emit("toogleLoader", true);
		QuickPlayRequestsService.getSearchData(params).then(function(data){
			var obj = QuickPlayParsersService.parseSearchList(data), allData = [];
			self.loadedRequests[obj.pageNumber] = obj;
			$scope.$emit("toogleLoader", false);
			$scope.paginationConfig.maxValue = obj.totalItems;

			_.each(self.loadedRequests, function(page){
				allData = allData.concat(page.items);
			});
			console.log(obj, allData.length);
			$scope.allData = allData;
			$scope.additionalData.result = allData;
		}, function(error){
			$scope.$emit("toogleLoader", false);
			var obj = QuickPlayParsersService.createFakeSearchListData(params.pageSize, params.pageNumber);
			self.loadedRequests[obj.pageNumber] = obj;
			console.log("error", error);
		});

	};

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
