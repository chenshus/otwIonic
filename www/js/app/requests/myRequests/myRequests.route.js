(function() {
    'use strict';

    angular
        .module('app.myRequests')
        .run(appRun);



    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/myRequests');
    }

    function getStates() {
        return [
            {
                state: 'app.myRequests',
                config: {
                    url: '/myRequests',
                    views: {
                        'menuContent': {
                            templateUrl: "js/app/requests/myRequests/myRequests.html",
                            controller: 'MyRequests',
                            settings: {
                                nav: 2
                            }
                        }
                    }

                }
            }

        ];


    }
})();

