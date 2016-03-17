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
		$scope.channels = [];

		function getDiscoverySections () {
			QuickPlayRequestsService.getContainerData().then(function processDiscovery (data) {
				var paginatedData = data.paginatedResources;
				var channelsIds = _.findWhere(paginatedData, {id: 'Channels'}).children;

				_.each(paginatedData, function (container) {
					if (_.indexOf(channelsIds, container.id) !== -1) {
						$scope.channels.push(container);
					}
				});

				//TODO remove this code. It's only for POC purposes
				var channel = $scope.channels[0];
				while ($scope.channels.length < 10) {
					$scope.channels.push(channel);
				}

			});
		}

		getDiscoverySections();
	});
