'use strict'

angular.module('bbApp')
.controller('BbsListCtrl', function($scope, $meteor) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  $scope.types = [
    { "id": 1, "name": "Биллборд" },
    { "id": 2, "name": "Ситиборд" },
    { "id": 3, "name": "Суперсайт" },
    { "id": 4, "name": "Перетяжка" },
    { "id": 5, "name": "Стена здания" },
    { "id": 6, "name": "Крыша здания" },
    { "id": 7, "name": "Забор" },
    { "id": 8, "name": "Тумба" },
    { "id": 9, "name": "Остановка " }
  ];
  
  $scope.bbs = $scope.$meteorCollection(function() {
    return Bbs.find({}, {sort:$scope.getReactively('sort')});
  });
  $meteor.autorun($scope, function() {
    $scope.$meteorSubscribe('bbs', {
      limit: parseInt($scope.getReactively('perPage')),
      skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
      sort: $scope.getReactively('sort')
    }, $scope.getReactively('search')).then(function() {
      $scope.bbsCount = $scope.$meteorObject(Counts, 'numberOfBbs', false);
    });
  });

  $meteor.session('bbsCounter').bind($scope, 'page');
    
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.bbs.save($scope.newBb);
      $scope.newBb = undefined;
    }
  };
      
  $scope.remove = function(bb) {
    $scope.bbs.remove(bb);
  };
    
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
    
  $scope.$watch('orderProperty', function() {
    if($scope.orderProperty) {
      $scope.sort = {name_sort: parseInt($scope.orderProperty)};
    }
  });
});
        