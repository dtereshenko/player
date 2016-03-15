'use strict';

describe('Directive: channelPillar', function () {

  // load the directive's module
  beforeEach(module('webPlayerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<channel-pillar></channel-pillar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the channelPillar directive');
  }));
});
