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
		'underscore',
		'ng.deviceDetector'
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
			name: 'root.home',
			url: 'home',
			views:{
				'mainContent@root': {
					templateUrl: 'views/home.html',
					controller: 'HomeCtrl'
				}
			}
		})
		.state({
			name: 'root.forme',
			url: 'for-me',
			views:{
				'mainContent@root': {
					templateUrl: 'views/for_me.html',
					controller: 'ForMeCtrl'
				}
			}
		})
		.state({
			name: 'root.discovery',
			url: 'discovery',
			views: {
				'mainContent@root': {
					templateUrl: 'views/discovery.html',
					controller: 'DiscoveryCtrl'
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
			name: 'root.tvShows',
			url: 'tvshows',
			views:{
				'mainContent@root': {
					templateUrl: 'views/shows.html',
					controller: 'ShowsCtrl'
				}
			}
		})
		.state({
			name: 'root.tvShow',
			url: 'tvshows/:showId',
			views:{
				'mainContent@root': {
					templateUrl: 'views/tvShow.html',
					controller: 'ShowCtrl'
				}
			}
		})
		.state({
			name: 'root.movies',
			url: 'movies',
			views:{
				'mainContent@root': {
					templateUrl: 'views/movies/movies.html',
					controller: 'MoviesCtrl'
				}
			}
		})
		.state({
			name: 'root.movie',
			url: 'movies/:movieId',
			views:{
				'mainContent@root': {
					templateUrl: 'views/movies/movie.html',
					controller: 'MovieCtrl'
				}
			}
		})
		.state({
			name: 'root.player',
			url: 'player',
			views:{
				'mainContent@root': {
					templateUrl: 'views/player/index.html',
					controller: 'PlayerCtrl'
				}
			}
		})
		.state({
			name: 'root.player.view',
			url: '/view',
			views:{
				'mainContent@root': {
					templateUrl: 'views/player/view.html',
					controller: 'PlayerViewCtrl'
				}
			}
		})
		.state({
			name: 'root.searchsimple',
			url: 'search',
			views: {
				'mainContent@root': {
					templateUrl: 'views/search.html',
					controller: 'SearchCtrl'
				}
			}
		})
		.state({
			name: 'root.search',
			url: 'search/:q',
			views: {
				'mainContent@root': {
					templateUrl: 'views/search.html',
					controller: 'SearchCtrl'
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
