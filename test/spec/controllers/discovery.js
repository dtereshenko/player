'use strict';

describe('Controller: DiscoveryCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var DiscoveryCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		DiscoveryCtrl = $controller('DiscoveryCtrl', {
			$scope: scope
			// place here mocked dependencies
		});
	}));

	it('should has channels array defined', function () {
		expect(scope.channels).toEqual([]);
	});
});
