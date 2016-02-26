'use strict';

describe('Service: ProvidersFactory', function () {

  // load the service's module
  beforeEach(module('webPlayerApp'));

  // instantiate service
  var ProvidersFactory;
  beforeEach(inject(function (_ProvidersFactory_) {
    ProvidersFactory = _ProvidersFactory_;
  }));

  it('should do something', function () {
    expect(!!ProvidersFactory).toBe(true);
  });

});
