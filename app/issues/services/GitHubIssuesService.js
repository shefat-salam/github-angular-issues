'use strict';
myApp.factory('GitHubIssuesFactory', function gitHubIssuesFactory ($resource, $rootScope) {
     // $resource(url, [paramDefaults], [actions], options);
     return $resource('https://api.github.com/repos/angular/angular.js/issues', {number: '@number'}, { get: {method: 'GET', isArray: true, params: { number: 0}}});
   
     
});
