// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

(function() {

    'use strict';

    angular.module('app', [
        'ionic',
        'ngCordova',
        'ionic.service.core',
        'ionic.service.push',
        'ionic.service.deploy',
        'ngResource',
        'blocks.router',
        'app.login',
        'app.register',
        'app.core',
        'app.myProfile',
        'app.settings',
        'app.myRequests',
        'app.mainFeedItems',
        'app.mainFeed',
        'app.post',
        'app.mainFeed.checkIn',
        'app.customersRequests',
        'app.pendingDeals',
        'app.layout',
        'app.widgets',
        'btford.socket-io',
        'ngCordova.plugins.facebook',
        'ngStorage',
        'ngMaterial',
        'app.notification'
    ])

    .run(function($ionicPlatform){
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }

            })
        })

        .config(['$ionicAppProvider', function($ionicAppProvider) {
            // Identify app
            $ionicAppProvider.identify({
                // The App ID (from apps.ionic.io) for the server
                app_id: '545a63fe',
                // The public API key all services will use for this app
                api_key: '7882bdce7c67c085063aaa4bdf78560d4fb0b17908cc4e50',
                // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
                 gcm_id: '1027932218423'
            });
        }])

})();
