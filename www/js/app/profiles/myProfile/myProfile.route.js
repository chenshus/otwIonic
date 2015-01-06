(function() {
    'use strict';

    angular
        .module('app.myProfile')
        .run(appRun);



    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/myProfile');
    }

    function getStates() {
        return [
            {
                state: 'app.myProfile',
                config: {
                    url: '/myProfile',
                    views: {
                        'menuContent': {
                            templateUrl: "js/app/profiles/myProfile/myProfile.html",
                            controller: 'MyProfile',
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

