'use strict'

angular.module('bbApp')
.config(function($stateProvider) {
  $stateProvider
  .state('bbs-list', {
    url: '/bbs',
    templateUrl: 'client/bbs/bbs-list.view.html',
    controller: 'BbsListCtrl'
  })
  .state('bb-detail', {
    url: '/bbs/:bbId',
    templateUrl: 'client/bbs/bb-detail.view.html',
    controller: 'BbDetailCtrl'
  });
});