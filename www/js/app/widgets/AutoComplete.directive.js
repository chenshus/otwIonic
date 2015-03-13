(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('googleplace', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, model) {
                    var options = {
                        types: [],
                        componentRestrictions: {}
                    };
                    scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
                    element[0].focus();
                    scope[attrs.googleplace] =true;
                    google.maps.event.addListener(scope.gPlace, 'place_changed', function () {

                        scope.$apply(function () {
                            model.$setViewValue(element.val());
                        });
                    });
                }
            };
        });
})();



