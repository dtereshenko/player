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
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

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
			name: 'root.login',
			url: '/login',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/login.html',
					controller: 'LoginCtrl'
				}
			}
		})
		.state({
			name: 'root.unbundled',
			url: '/unbundled',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/unbundled.html',
					controller: 'UnbundledCtrl'
				}
			}
		})
		.state({
			name: 'root.providers',
			url: '/providers',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/providers.html',
					controller: 'ProviderCtrl'
				}
			}
		})
		.state({
			name: 'root.providers.verify',
			url: '/verify',
			views:{
				'mainContent@root': {
					templateUrl: 'views/auth/verify.html',
					controller: 'VerifyCtrl'
				}
			}
		});

	})
	.run(function navigationHandler ($state, $rootScope) {
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
