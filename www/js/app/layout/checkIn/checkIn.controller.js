(function() {

    angular
        .module('app.mainFeed.checkIn')
        .controller('CheckIn', CheckIn);

    function CheckIn($http, checkInModal, $rootScope) {

        var vm=this;
        vm.currentLocation = "";
        vm.ComingBackLocation = "";
        vm.comingBackDate = "";
        vm.description = "";
        vm.autocompleteValues =[];
        vm.selectedItem  = null;
        vm.searchTextComingBackLocation    = null;
        vm.searchComingBackLocationText =null;
        vm.simulateQuery = false;

        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0,10);
        });

        vm.minComingBackDate = new Date().toDateInputValue();


        vm.GetPlace = function(value){
            var params = {address: value, sensor: false};
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
                .then(function(res) {
                    return res.data.results;
                });
        };
        vm.fieldBlurred = function($event){
            var currentElement = angular.element($event.target);
            if(currentElement.val() == '') {
                currentElement.parent().removeClass('md-input-has-value');
            }
        };

        vm.closeModal =function(){
            vm.clearFields();
            checkInModal.Modal.hide()
        };

        vm.UserCheckIn =function (){
            if(angular.element(document.querySelectorAll('[aria-invalid=true]')).length == 0){
                var newCheckIn = {
                    'description' : vm.description,
                    'comingBackDate' : vm.comingBackDate,
                    'comingBackLocation' : vm.ComingBackLocation,
                    'currentLocation' : vm.currentLocation
                };
                $rootScope.$emit('newCheckIn', newCheckIn);
                vm.closeModal();
            }
        };

        vm.clearFields = function(){
            vm.description = '';
            setTimeout(function() {
                angular.element(document.querySelectorAll('[class*=description]')).parent().find('div')[0].innerText = '';
            }, 0.10);
            vm.comingBackDate = '';
            vm.comingBackLocation = '';
        };

        function success(pos) {
            var crd = pos.coords;

            console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less ' + crd.accuracy + ' meters.');
        };

        function Geoerror(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };


        navigator.geolocation.getCurrentPosition(sucsess2,Geoerror);

        function sucsess2 (pos) {
            var geocoder = new google.maps.Geocoder();
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;
            var latlng = new google.maps.LatLng(lat, lng);

            //reverse geocode the coordinates, returning location information.
            geocoder.geocode({'latLng': latlng}, function (results, status) {
                var result = results[0];
                var state = '';

                for (var i = 0, len = result.address_components.length; i < len; i++) {
                    var ac = result.address_components[i];

                    if (ac.types.indexOf('locality') >= 0) {
                        state = ac.short_name;
                        vm.currentLocation = state;
                    }
                    if (ac.types.indexOf('country') >= 0) {
                        state = ac.short_name;
                        vm.currentLocation =  vm.currentLocation +"," +state;
                    }
                }

            });
        }
    }
})();


