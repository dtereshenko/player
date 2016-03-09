/**
 * Created by Anton_Ovcharuk on 3/3/2016.
 */
'use strict';

angular.module('webPlayerApp').service('QuickPlayConfigService', function () {
	var self = this;
	//self.host = "http://40.117.144.176:9411/fox/restapi/";
	self.host = "http://52.28.79.214:8800/solr/RestApiSingTel/restapi";
	self.staticParams = {
		apiKey: "qwerty",
		device: "webClient",
		network: "WiFI",
		inHome: true
	};
});
