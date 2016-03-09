/**
 * Created by Anton_Ovcharuk on 3/9/2016.
 */
angular.module('webPlayerApp').service('RequestsCacheService', function ($cacheFactory) {

	self.providers = providers();
	self.selectedProvider = null;
	self.findProvider = findProvider;
});