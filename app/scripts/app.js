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

		//$urlRouterProvider.otherwise('/welcome');

		//$stateProvider
		//	.state('welcome', {
		//		url: '/welcome',
		//		templateUrl: 'views/welcome.html',
		//		controller: 'WelcomeController',
		//		controllerAs: 'welcome'
		//
		//	})
		//	.state('login', {
		//		url: '/login',
		//		templateUrl: 'views/about.html',
		//		controller: 'AboutCtrl',
		//		controllerAs: 'about'
		//	})
		//	.state('unbundled', {
		//		url: '/unbundled',
		//		templateUrl: 'views/unbundled.html',
		//		controller: 'UnbundledController',
		//		controllerAs: 'unbundled'
		//	})
		//	.state('provider', {
		//		url: '/provider',
		//		templateUrl: 'views/provider.html',
		//		controller: 'ProviderCtrl',
		//		controllerAs: 'provider'
		//	})
		//	.state('verify', {
		//		url: '/verify',
		//		templateUrl: 'views/verify.html',
		//		controller: 'VerifyCtrl',
		//		controllerAs: 'verify'
		//	});





		$stateProvider.state({
			name: 'root',
			url: '',
			views: {
				'@': {
					templateUrl: '../views/root.html',
					controller: 'RootCtrl'
				},
				'mainContent@root': {
					templateUrl: '../views/home.html',
					controller: 'HomeCtrl'
				}
			}
		})
		.state({
			name: 'root.welcome',
			url: '/welcome',
			views:{
				'mainContent@root': {
					templateUrl: 'views/welcome.html',
					controller: 'WelcomeCtrl'
				}
			}
		})
		.state({
			name: 'root.login',
			url: '/login',
			views:{
				'mainContent@root': {
					templateUrl: 'views/login.html',
					controller: 'LoginCtrl'
				}
			}
		})
		.state({
			name: 'root.unbundled',
			url: '/unbundled',
			views:{
				'mainContent@root': {
					templateUrl: 'views/unbundled.html',
					controller: 'UnbundledCtrl'
				}
			}
		})
		.state({
			name: 'root.provider',
			url: '/provider',
			views:{
				'mainContent@root': {
					templateUrl: 'views/provider.html',
					controller: 'ProviderCtrl'
				}
			}
		})
		.state({
			name: 'root.verify',
			url: '/verify',
			views:{
				'mainContent@root': {
					templateUrl: 'views/verify.html',
					controller: 'VerifyCtrl'
				}
			}
		})

		;
		$urlRouterProvider.otherwise('');


	});
