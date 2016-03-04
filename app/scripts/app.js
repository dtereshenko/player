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
		'underscore'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$httpProvider.defaults.useXDomain = true;
		//$httpProvider.defaults.headers.common['Accept'] = 'application/json';
		//$httpProvider.interceptors.push([
		//	'$cookies', '$q', function($cookies, $q, User) {
		//		return {
		//			request: function(config) {
		//				debugger;
		//				return config;
		//			},
		//			response: function(response) {
		//				debugger;
		//				return response;
		//			},
		//			responseError: function(response) {
		//				return $q.reject(response);
		//			}
		//		};
		//	}
		//]);

		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);

		$stateProvider.state({
			name: 'root',
			url: '/',
			views: {
				'@': {
					templateUrl: '../views/root.html',
					controller: 'RootCtrl'
				},
				'mainContent@root': {
					templateUrl: '../views/auth/welcome.html',
					controller: 'WelcomeCtrl'
				}
			}
		})
		.state({
			name: 'root.unbundled',
			url: 'unbundled',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/unbundled.html',
					controller: 'UnbundledCtrl'
				}
			}
		})
		.state({
			name: 'root.providers',
			url: 'providers',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/providers.html',
					controller: 'ProviderCtrl'
				}
			}
		})
		.state({
			name: 'root.providers.provider',
			url: '/:providerId',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/verify.html',
					controller: 'VerifyCtrl'
				}
			}
		})
		.state({
			name: 'root.providers.provider.login',
			url: '/login',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/login.html',
					controller: 'LoginCtrl'
				}
			}
		})
		.state({
			name: 'root.schedules',
			url: 'schedules',
			views:{
				'mainContent@root': {
					templateUrl: 'views/schedules.html',
					controller: 'SchedulesCtrl'
				}
			}
		})
		.state({
			name: 'root.movies',
			url: 'movies',
			views:{
				'mainContent@root': {
					templateUrl: 'views/movies.html',
					controller: 'MoviesCtrl'
				}
			}
		});
	})
	.run(function navigationHandler ($state, $rootScope, $location) {
		var routes = [];
		var isFromBackButton = false;

		$rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
			var fromName = fromState.name;

			if (fromName && !isFromBackButton) {
				routes.unshift(fromName);
			}
			isFromBackButton = false;
		});

		$rootScope.isBackAvailable = function () {
			return !!routes.length;
		};

		$rootScope.back = function back() {
			var route = routes.shift();
			isFromBackButton = true;
			$state.go(route);
		};

	});
