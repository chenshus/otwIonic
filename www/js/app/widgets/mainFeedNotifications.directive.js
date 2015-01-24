(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('mainFeedNotifications', function ($document) {
            return {
                scope : {},
                restrict: 'E',
                templateUrl: 'js/app/layout/notifications/mainFeedNotifications.html',
                link: function($scope, document){
                    angular.element(document).ready(function () {
                        angular.element($document[0].querySelector("ion-header-bar")).append(angular.element($document[0].querySelector("main-feed-notifications")));
                    });
                }
            };
        });
})();



