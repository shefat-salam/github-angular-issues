'use strict';
var myApp = angular.module('myApp', ['ngRoute','ngResource']);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/issues', {
      templateUrl: 'issues/views/github-issues.html',
      controller: 'GitHubIssuesCtrl',
      controllerAs: 'GitHubIssues'
    })
    .otherwise({redirectTo: '/issues'});
}]).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
