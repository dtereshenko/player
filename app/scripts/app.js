'use strict';

/**
 * @ngdoc overview
 * @name webPlayerApp
 * @description
 * # webPlayerApp
 *
 * Main module of the application.
 */
angular
	.module('webPlayerApp', [
		'ngAnimate',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ui.router',
		'ngSanitize',
		'ngTouch',
		'navigation'
	])
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/welcome');

		$stateProvider
			.state('welcome', {
				url: '/welcome',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'

			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			});


	});
