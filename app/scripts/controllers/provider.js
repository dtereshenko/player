'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:ProviderCtrl
 * @description
 * # ProviderCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp')
	.controller('ProviderCtrl', ['$scope', 'providersFactory', function ($scope, providersFactory) {
		$scope.title = 'SELECT YOUR PROVIDER';
		$scope.providersLimit = 6;
		$scope.providers = providersFactory.providers;
		$scope.seeAllOperators = function () {
			$scope.providersLimit = $scope.providers.length;
		};

		$scope.setSelectedProvider = function (provider) {
			providersFactory.selectedProvider = provider;
		}
	}])
	.controller('VerifyCtrl', ['$scope', 'providersFactory', function ($scope, providersFactory) {
		$scope.title = 'Verify';
		$scope.provider = providersFactory.selectedProvider;

	}])
	.factory('providersFactory', function () {
		return {
			selectedProvider: null,
			providers: [
				{
					"title": "Provider 1",
					"link": "provider_1",
					"id": 1
				}, {
					"title": "Provider 2",
					"link": "provider_2",
					"id": 2
				}, {
					"title": "Provider 3",
					"link": "provider_3",
					"id": 3
				}, {
					"title": "Provider 4",
					"link": "provider_4",
					"id": 4
				}, {
					"title": "Provider 5",
					"link": "provider_5",
					"id": 5
				}, {
					"title": "Provider 6",
					"link": "provider_6",
					"id": 6
				}, {
					"title": "Provider 7",
					"link": "provider_7",
					"id": 7
				}, {
					"title": "Provider 8",
					"link": "provider_8",
					"id": 8
				}, {
					"title": "Provider 9",
					"link": "provider_9",
					"id": 9
				}
			]

		}
	});
