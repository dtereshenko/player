'use strict';

/**
 * @ngdoc function
 * @name webPlayerApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the webPlayerApp
 */
angular.module('webPlayerApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.links = [
		{"title": 'Edit profile', "link": 'root.profile'},
		{"title": 'Parental controll', "link": ''},
		{"title": 'What is foxplay?', "link": ''},
		{"title": 'What is new', "link": ''},
		{"title": 'Terms of use', "link": ''},
		{"title": 'Privacy policy', "link": ''},
		{"title": 'Help', "link": ''},
	]
  });
