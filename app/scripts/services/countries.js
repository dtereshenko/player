'use strict';

angular.module('webPlayerApp').service('CountriesService', function () {
	var self = this;
	function countries() {
		var i = 0, arr = [];
		for(i; i< 25; i++){
			arr.push({
				"title": "Country " + i,
				"link": "Country " + i,
				"id": i
			});
		}
		return arr;
	}

	self.countries = countries();
	self.selectedCountry = self.countries[0];
});