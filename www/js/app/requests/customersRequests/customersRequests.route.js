(function() {
    'use strict';

    angular
        .module('app.customersRequests')
        .run(appRun);



    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/customersRequests');
    }

    function getStates() {
        return [
            {
                state: 'app.customersRequests',
                config: {
                    url: '/customersRequests',
                    views: {
                        'menuContent': {
                            templateUrl: "js/app/requests/customersRequests/customersRequests.html",
                            controller: 'CustomersRequests',
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
