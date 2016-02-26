'use strict';

angular.module('webPlayerApp').service('ProvidersService', function () {
	var self = this;
	function providers() {
		var i = 0, arr = [];
		for(i; i< 50; i++){
			arr.push({
				"title": "Provider" + i,
				"link": "provider" + i,
				"id": i
			});
		}
		return arr;
	}

	self.selectedProvider = null;
	self.providers = providers();

});