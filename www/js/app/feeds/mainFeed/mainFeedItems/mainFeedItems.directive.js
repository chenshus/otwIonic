(function () {
    'use strict';

    angular
        .module('app.mainFeedItems')
        .directive('mainFeedItems', function ($document) {
            return {
                scope : {},
                restrict: 'E',
                templateUrl: 'js/app/feeds/mainFeed/mainFeedItems/mainFeedItems.html',
                controller: 'MainFeedItems'
            };
        });
})();




