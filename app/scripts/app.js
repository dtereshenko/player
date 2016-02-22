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
				templateUrl: 'views/welcome.html',
				controller: 'WelcomeController',
				controllerAs: 'welcome'

			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.state('unbundled', {
				url: '/unbundled',
				templateUrl: 'views/unbundled.html',
				controller: 'UnbundledController',
				controllerAs: 'unbundled'
			})
			.state('provider', {
				url: '/provider',
				templateUrl: 'views/provider.html',
				controller: 'ProviderCtrl',
				controllerAs: 'provider'
			})
			.state('verify', {
				url: '/verify',
				templateUrl: 'views/verify.html',
				controller: 'VerifyCtrl',
				controllerAs: 'verify'
			});


	});
