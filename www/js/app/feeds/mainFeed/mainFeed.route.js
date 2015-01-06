(function() {
    'use strict';

    angular
        .module('app.mainFeed')
        .run(appRun);



    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/app/mainFeed');
    }

    function getStates() {
        return [
            {
                state: 'app.mainFeed',
                config: {
                    url: '/mainFeed',
                    views: {
                        'menuContent': {
                            templateUrl: "js/app/feeds/mainFeed/mainFeed.html",
                            controller :'MainFeed',
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

