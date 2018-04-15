'use strict';
myApp.controller('GitHubIssuesCtrl', ['$scope','$location', '$q', '$rootScope','$timeout', 'GitHubIssuesFactory', function(scope, $location, $q, $rootScope, $timeout, GitHubIssuesFactory) {
    scope.gitHubData = {
         isInitialized: false,
         gitHubIssuesList:[],
         currentIssue: null,
         openNum: null,
         closeNum: null,
         issueListState: 'open',
         issueListSort: 'created',
         issueListDirection: 'desc',
         issueListPage: 1
    };

    scope.getAllGitHubIssuesData = function(){
            GitHubIssuesFactory.query({
                state: scope.gitHubData.issueListState,
                // sort: scope.gitHubData.issueListSort,
                // direction: scope.gitHubData.issueListDirection
            }, function (data) {
                scope.gitHubData.gitHubIssuesList = data;
                scope.gitHubData.isInitialized=true;

                for(index in scope.gitHubData.gitHubIssuesList.milestone ) {
                  var openissues = scope.gitHubData.gitHubIssuesList.milestone[index].open_issues;
                  var closeissues = scope.gitHubData.gitHubIssuesList.milestone[index].open_issues;
                }

                for(var i in openissues) {
                   scope.gitHubData.openNum += openissues[i];
                }
                for(var i in closeissues) {
                   scope.gitHubData.closeNum += closeissues[i];
                }

            });
    }
    scope.getStyle = function (taskType) {
        return { "background-color": "#"+taskType }
    }
    scope.setState = function (state) {
        scope.gitHubData.issueListState = state;
        scope.getAllGitHubIssuesData();
    };
    $timeout( function(){
        scope.getAllGitHubIssuesData();
    }, 1000 );

    scope.getDay = function(givenDate){
        var today = new Date();
        // var dd = today.getDate();
        return  Math.floor(( Date.parse(today) - Date.parse(givenDate) ) / 86400000);

    }

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
            e.preventDefault();
            var param = $(this).attr("href").replace("#","");
            var concept = $(this).text();
            $('.search-panel span#search_concept').text(concept);
            $('.input-group #search_param').val(param);
    });

    $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
    });

}]);
