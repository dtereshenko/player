'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:WelcomeController
 * @description
 * # WelcomeController
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp')
	.controller('WelcomeController', function ($state) {
		this.goUnbundled = function () {
			console.log('go unbundled');
			$state.go('unbundled');
		}


	});
