'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:DiscoveryCtrl
 * @description
 * # DiscoveryCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp')
	.controller('DiscoveryCtrl', function (QuickPlayRequestsService, $scope) {
		$scope.pillars = [];
		$scope.channels = [];

		function getDiscoverySections () {
			QuickPlayRequestsService.getContainerData().then(function processDiscovery (data) {
				var paginatedData = data.paginatedResources;
				var pillarsIds = _.findWhere(paginatedData, {id: 'Pillars'}).children;
				var channelsIds = _.findWhere(paginatedData, {id: 'Channels'}).children;

				_.each(paginatedData, function (container) {
					if (_.indexOf(pillarsIds, container.id) !== -1) {
						$scope.pillars.push(container);
						return;
					}

					if (_.indexOf(channelsIds, container.id) !== -1) {
						$scope.channels.push(container);
					}

				})
			})
		}

		getDiscoverySections();
	});
