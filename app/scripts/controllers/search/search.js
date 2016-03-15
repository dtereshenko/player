'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('SearchCtrl', function ($scope, $stateParams, QuickPlayRequestsService, QuickPlayParsersService) {
	$scope.search = {
		searchStr: '',
		result: []
	};
});
