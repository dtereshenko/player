'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp')
  .controller('ProfileCtrl', function ($scope) {
      $scope.validation = false;
	  $scope.validate = function(){
		  $scope.validation = !$scope.validation;
	  };
	  $scope.next = false;
	  $scope.next = function(){
		  $scope.next = !$scope.next;
	  };
	  $scope.shadow = false;
	  $scope.shadowChange = function(){
		  $scope.shadow = !$scope.shadow;
	  };
  });
