'use strict';

angular.module('webPlayerApp').service('ProvidersService', function () {
	var self = this;
	function providers() {
		var i = 0, arr = [];
		for(i; i< 25; i++){
			arr.push({
				"title": "Provider" + i,
				"link": "provider" + i,
				"id": i
			});
		}
		return arr;
	}
	function findProvider(name){
		return _.find(self.providers, function(provider){
			if(provider.title === name){
				return true
			}
		});

	}

	self.providers = providers();
	self.selectedProvider = null;
	self.findProvider = findProvider
});
