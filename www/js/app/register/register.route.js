(function() {
    'use strict';

    angular
        .module('app.register')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/register');
    }

    function getStates() {
        return [
            {
                state: 'register',
                config: {
                    url: '/register',
                    templateUrl: "js/app/register/register.html",
                    controller :'Register'

                }
            }
        ];
    }
})();
