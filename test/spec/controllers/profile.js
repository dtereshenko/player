'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('webPlayerApp'));

  var ProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should switch validation form', function () {
    expect(scope.validation).toBe(false);
    scope.validate();
	expect(scope.validation).toBe(true);
    scope.validate();
	expect(scope.validation).toBe(false);
  });

  it('should switch next form', function () {
    expect(scope.nextFlag).toBe(false);
    scope.next();
	expect(scope.nextFlag).toBe(true);
    scope.next();
	expect(scope.nextFlag).toBe(false);
  });

  it('should switch shadow form', function () {
    expect(scope.shadow).toBe(false);
    scope.shadowChange();
	expect(scope.shadow).toBe(true);
    scope.shadowChange();
	expect(scope.shadow).toBe(false);
  });
});
