(function() {
    'use strict';

    angular
        .module('app.pendingDeals')
        .run(appRun);



    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/pendingDeals');
    }

    function getStates() {
        return [
            {
                state: 'app.pendingDeals',
                config: {
                    url: '/pendingDeals',
                    views: {
                        'menuContent': {
                            templateUrl: "js/app/deals/pendingDeals/pendingDeals.html",
                            controller: 'PendingDeals',
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
