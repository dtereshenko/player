'use strict';

angular.module('webPlayerApp').service('QuickPlayAPIService', function ($resource) {
	var self = this;
	var host = "http://40.117.144.176:9411/fox/restapi/";
	var headers = {
		//"Access-Control-Allow-Origin": "*",
		//"Content-Type": "text/plain",
		"Accept": "application/json"
	};

	self.moviesREST = $resource(host + '/movies/:id', {
		id: '@id',
		apiKey: "qwerty",
		device: "webClient",
		network: "WiFI",
		inHome: true
	});


});
