'use strict';

describe('Controller: SettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('webPlayerApp'));

  var SettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SettingsCtrl = $controller('SettingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be links length = 7', function () {
    expect(scope.links.length).toBe(7);
  });

  it('should be first link as example', function () {
    expect(JSON.stringify(scope.links[0])).toBe(JSON.stringify({"title": 'Edit profile', "link": 'root.profile'}));
  });

  it('should be first link equal', function () {
    expect(scope.links[0]).toEqual({"title": 'Edit profile', "link": 'root.profile'});
  });
});
