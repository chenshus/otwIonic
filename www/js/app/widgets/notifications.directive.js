(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('notifications', function () {
            return {
                restrict: 'E',
                templateUrl: 'js/app/layout/notifications/notification.html'
            };
        });
})();



