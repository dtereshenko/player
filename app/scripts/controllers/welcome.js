'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp')
	.controller('WelcomeController', function ($state) {
		this.goUnbundled = function () {
			console.log('go unbundled');
			$state.go('unbundled');
		}

	});
