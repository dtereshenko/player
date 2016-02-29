'use strict';

describe('Controller: ProvidersCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var ProvidersCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		ProvidersCtrl = $controller('ProvidersCtrl', {$scope: scope});
		$httpBackend.whenGET(/\.html$/).respond("");
		//spyOn(scope, "toggleLoader").and.callThrough();
	}));
});
