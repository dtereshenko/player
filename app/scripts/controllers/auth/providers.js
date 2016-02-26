'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:ProviderCtrl
 * @description
 * # ProviderCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp').controller('ProviderCtrl', function ($scope, ProvidersService) {
	$scope.title = 'SELECT YOUR PROVIDER';
	$scope.providersLimit = 6;
	$scope.providers = ProvidersService.providers;

	$scope.closeModals = function(){
		$scope.showAllProviders = false;
		$scope.showChangeCountries = false;
	};

	$scope.seeAllOperators = function () {
		$scope.showAllProviders = true;
	};

	$scope.changeCountry = function () {
		$scope.showChangeCountries = true;
	};

	$scope.setSelectedProvider = function (provider) {
		ProvidersService.selectedProvider = provider;
	};

	$scope.closeModals();
});



