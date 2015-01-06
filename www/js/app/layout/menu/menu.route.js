(function() {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/feed');
    }

    function getStates() {
        return [
            {
                state: 'app',
                config: {
                    url: '/app',
                    abstract:true,
                    templateUrl: 'js/app/layout/menu/menu.html',
                    controller :'Menu',
                    settings: {
                        nav: 1
                    }
                }
            }
        ];


    }
})();