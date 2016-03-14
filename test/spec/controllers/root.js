'use strict';

describe('Controller: RootCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var RootCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		RootCtrl = $controller('RootCtrl', {$scope: scope});
		$httpBackend.whenGET(/\.html$/).respond('');
		spyOn(scope, 'toggleLoader').and.callThrough();
	}));

	it('loader should be visible', function () {
		expect(scope.showFullScreenLoader).toBe(false);
	});


	it('toogleLoader should be change loader state', function() {
		expect(scope.showFullScreenLoader).toBe(false);
		scope.toggleLoader();
		expect(scope.toggleLoader).toHaveBeenCalledTimes(1);
		expect(scope.showFullScreenLoader).toBe(true);
		scope.toggleLoader();
		expect(scope.toggleLoader).toHaveBeenCalledTimes(2);
		expect(scope.showFullScreenLoader).toBe(false);
	});
});
