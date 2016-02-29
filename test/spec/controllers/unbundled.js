'use strict';

describe('Controller: UnbundledCtrl', function () {

	// load the controller's module
	beforeEach(module('webPlayerApp'));

	var UnbundledCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		UnbundledCtrl = $controller('UnbundledCtrl', {$scope: scope});
		$httpBackend.whenGET(/\.html$/).respond('');
	}));
});
