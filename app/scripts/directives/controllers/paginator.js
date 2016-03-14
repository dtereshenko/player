
angular.module('webPlayerApp').controller('PaginatorCtrl', function($scope, $window, $location, $stateParams) {
	var calculateMaxPage, getLimits, paginateLogic, paginatePages, startPagination;

	paginatePages = function(page) {
		var end, start, i, results = [];
		start = page - 2;
		end = page + 2;
		if (start <= 0) {
			start = 0;
			end = 4;
		}
		if (end >= $scope.maxPage) {
			end = $scope.maxPage;
			start = $scope.maxPage - 4;
			if (start <= 0) {
				start = 0;
			}
		}
		for (i = start; start <= end ? i <= end : i >= end; start <= end ? i++ : i--){
			results.push(i);
		}
		$scope.pages = results;
	};

	calculateMaxPage = function() {
		var diff, maxPage, sum, val, i, length =  $scope.perPagesArray.length;
		maxPage = 0;
		sum = 0;
		for (i = 0; i < length; i++) {
			val = $scope.perPagesArray[i];
			if (sum < $scope.maxValue) {
				maxPage++;
			} else {
				return maxPage - 1;
			}
			sum += val;
		}
		if (sum < $scope.maxValue) {
			diff = $scope.maxValue - sum;
			maxPage += Math.ceil(diff / $scope.perPagesArray[$scope.perPagesArray.length - 1]);
		}
		return maxPage - 1;
	};

	getLimits = function(page) {
		var count, diff, key, limit, start, val, i, length;
		count = page;
		start = 0;
		limit = 0;
		if ($scope.perPagesArray[count]) {
			for (key in $scope.perPagesArray) {
				val = $scope.perPagesArray[key];
				if (key < count) {
					start += val;
				} else {
					limit = val;
					break;
				}
			}
		} else if ($scope.perPagesArray.length > 0) {
			limit = $scope.perPagesArray[$scope.perPagesArray.length - 1];
			for (i = 0, length = $scope.perPagesArray.length; i < length; i++) {
				val = $scope.perPagesArray[i];
				start += val;
			}
			diff = count - $scope.perPagesArray.length;
			if (diff > 0) {
				start += limit * diff;
			}
		}
		return {
			start: start,
			end: start + limit
		};
	};

	paginateLogic = function(limits) {
		var arr;
		arr = [];
		$scope.notEnough = false;
		if (limits.start > $scope.inCome.length) {
			$scope.$applyAsync(function(){
				$scope.notEnough = true;
			});
		} else {
			if (limits.end > $scope.inCome.length) {
				$scope.$applyAsync(function(){
					$scope.notEnough = true;
				});
				switch ($scope.mode) {
					case 0:
						arr = $scope.inCome.slice(limits.start);
						break;
					case 1:
						arr = $scope.inCome.slice(0);
						break;
					default:
						arr = $scope.inCome.slice(limits.start);
				}
			} else {
				$scope.notEnough = false;
				arr = $scope.inCome.slice(limits.start, limits.end);
				switch ($scope.mode) {
					case 0:
						arr = $scope.inCome.slice(limits.start, limits.end);
						break;
					case 1:
						arr = $scope.inCome.slice(0, limits.end);
						break;
					default:
						arr = $scope.inCome.slice(limits.start, limits.end);
				}
			}
			$scope.result = arr;
		}
	};

	startPagination = function(newVal) {
		var limits;
		$scope.maxPage = calculateMaxPage();
		if ($scope.maxPage >= 0) {
			if (newVal > $scope.maxPage) {
				$scope.$applyAsync(function() {
					$scope.currentPage = $scope.maxPage;
				});
			} else {
				if ($scope.inCome) {
					limits = getLimits(newVal);
					paginateLogic(limits);
					paginatePages(newVal);
				}
			}
		}
	};

	$scope.changePage = function(page) {
		switch ($scope.mode) {
			case 0:
				$scope.currentPage = page;
				if ($scope.pagName) {
					$location.search($scope.pagName, page);
				}
				break;
			case 1:	$scope.currentPage++; break;
		}
	};

	this.init = function() {
		if ($scope.mode === null) {
			$scope.mode = 0;
		}

		if ($scope.showMoreButton === null) {
			$scope.showMoreButton = false;
		}

		$scope.$on('$destroy', function() {
			$location.search($scope.pagName, null).replace();
		});

		$scope.$watch('inCome', function(newVal) {
			if (newVal && !_.isUndefined($scope.currentPage)) {
				startPagination($scope.currentPage);
				if (newVal.length === 0) {
					$scope.result = [];
				}
			}
		});

		$scope.$watch('maxValue', function(newVal) {
			if (!_.isUndefined(newVal) && !_.isUndefined($scope.currentPage)) {
				startPagination($scope.currentPage);
			}
		});

		$scope.$watch('currentPage', function(newVal) {
			if (!_.isUndefined(newVal)) {
				startPagination(newVal);
			}
		});

		$scope.$watchCollection('perPagesArray', function(newVal) {
			if (!_.isUndefined(newVal) && ($scope.currentPage === 0)) {
				startPagination($scope.currentPage);
			}
		});

		if ($scope.pagName) {
			$scope.$watchCollection(function() {
				return $stateParams;
			}, function(newVal) {
				$scope.currentPage = +($location.search())[$scope.pagName] || 0
			});
		}
	};
});

