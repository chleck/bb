'use strict'

angular.module('bbApp')
.config(function($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'client/about/about.view.html',
    controller: 'AboutCtrl'
  });
});