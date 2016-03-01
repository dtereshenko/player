'use strict';

angular.module('webPlayerApp').controller('VerifyCtrl', function ($scope, ProvidersService, $stateParams) {
	$scope.title = 'Verify';

	$scope.provider = ProvidersService.findProvider($stateParams.providerId);
});
