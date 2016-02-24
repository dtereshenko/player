'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:WelcomeController
 * @description
 * # WelcomeController
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('WelcomeCtrl', function ($scope, $state) {
	$scope.goUnbundled = function () {
		console.log('go unbundled');
		$state.go('root.unbundled');
	}
});
