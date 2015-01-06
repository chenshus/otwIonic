(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(appRun);



    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/settings');
    }

    function getStates() {
        return [
            {
                state: 'app.settings',
                config: {
                    url: '/settings',
                    views: {
                        'menuContent': {
                            templateUrl: "js/app/settings/settings.html",
                            controller: 'Settings',
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

