"use strict";
angular.module('webPlayerApp').controller('ModalCtrl', function($scope) {
  $scope.toggleModal = function(e) {
    $scope.showTrigger = !$scope.showTrigger;
    e.stopPropagation();
  };

  $scope.closeModal = function(e){
    var el = e.target;
    if(el && (el.id === 'modal-content-' + $scope.modalId)) {
      return true;
    }
    else {
      while ((el !== e.currentTarget) && el) {
        el = el.parentElement;
        if (el.id === 'modal-content-' + $scope.modalId){
          return true;
        }
      }
    }
    $scope.toggleModal(e);
    if($scope.callback){
      $scope.callback();
    }
  };

  $scope.innerClick = function(e) {
    //return e.stopPropagation();
  };

  this.init = function() {
    return $scope.showTrigger !== null ? $scope.showTrigger : $scope.showTrigger = false;
  };
});

