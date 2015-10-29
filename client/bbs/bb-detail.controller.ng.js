'use strict'

angular.module('bbApp')
.controller('BbDetailCtrl', function($scope, $stateParams, $meteor) {
  $scope.bb = $scope.$meteorObject(Bbs, $stateParams.bbId);
  $scope.$meteorSubscribe('bbs');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.bb.save().then(
        function(numberOfDocs) {
          console.log('save successful, docs affected ', numberOfDocs);
        },
        function(error) {
          console.log('save error ', error);
        }
      )
    }
  };
        
  $scope.reset = function() {
    $scope.bb.reset();
  };
});