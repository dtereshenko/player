angular.module('navigation', [])
	.controller('NavigationController', ['$scope', '$state', function ($scope, $state) {


		var routes = [];
		var backButtonSource = 'back-button';
		var isFromBackButton = false;

		$scope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
			console.log('State changes to %s', toState.name);
			if (fromState.name && !isFromBackButton) {
				routes.unshift(fromState.name);
				console.log('Back routes:');
				console.dir(routes);
			}
			isFromBackButton = false;

			// We can prevent this state from completing
		});

		$scope.title = 'Test Navigation Controller';

		$scope.back = function back() {

			var route = routes.shift();
			console.log('Back to route %s', route);
			isFromBackButton = true;
			$state.go(route, {source: backButtonSource});

		};

		$scope.isBackAvailable = function () {
			return !!routes.length
		}
	}]);
