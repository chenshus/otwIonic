(function (){
    angular
        .module('blocks.router')
        .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject =['$locationProvider','$stateProvider','$urlRouterProvider'];

    function routerHelperProvider($locationProvider,$stateProvider,$urlRouterProvider){

        var config = {
            resolveAlways: {}
        };

        this.configure =function (cfg){
          angular.extend(config,cfg);
        };

        this.$get =RouterHelper;

        function RouterHelper($location,$rootScope,$state){
            var hasOtherwise = false;
            var service = {
                configureStates :configureStates,
                getStates : getStates
            };

            return service;

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {},config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function getStates() { return $state.get(); }
        }


    }
})();