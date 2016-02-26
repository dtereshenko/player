'use strict';

angular.module('webPlayerApp').controller('VerifyCtrl', function ($scope, ProvidersService) {
	$scope.title = 'Verify';
	$scope.provider = ProvidersService.selectedProvider;
});
