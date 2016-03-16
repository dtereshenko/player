'use strict';

angular.module('webPlayerApp').controller('SeasonsGridCtrl', function ($scope, $controller, $element, QuickPlayRequestsService, QuickPlayParsersService) {
	var self = this;
	angular.extend(this, $controller('GridCtrl', {$scope: $scope}));

	angular.merge($scope.paginationConfig, {
		name: "seasonPag",
		perPagesArray: [8]
	});

	$scope.$watch("additionalData", function(newVal) {
		if (newVal){
			$scope.$applyAsync(function(){
				$scope.allData = $scope.additionalData;
				$scope.paginationConfig.maxValue = $scope.additionalData.length;
			});
		}
	});
});
