'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('MoviesCtrl', function ($scope, QuickPlayRequestsService) {
	QuickPlayRequestsService.getContainerDataById().then(function(data){
		console.log(data);
	}, function(error){
		console.log(error)
	});
});
