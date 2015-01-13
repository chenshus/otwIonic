(function() {

    angular
        .module('app.mainFeed.checkIn')
        .controller('CheckIn', CheckIn);

    function CheckIn( $state) {

        var vm=this;
        vm.currentLocation="";
        vm.ComingBackLocation ="";



        vm.UserCheckIn =function (){
            console.log(vm.currentLocation);
            console.log(vm.ComingBackLocation);
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


