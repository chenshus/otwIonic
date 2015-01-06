(function() {
    'use strict';

    angular
        .module('login')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/login');
    }

    function getStates() {
        return [
            {
                state: 'login',
                config: {
                    url: '/login',
                    templateUrl: "js/app/login/login.html",
                    controller :'Login'
                }
            }
        ];
    }
})();


