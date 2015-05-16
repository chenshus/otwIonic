(function() {

    angular
        .module('app.post')
        .controller('Post', Post);

    function Post($rootScope,postModal,postService,$localStorage){ //postService?

        var vm= this;
        vm.Description = "";

        vm.fieldBlurred = function($event){
            var currentElement = angular.element($event.target);
            if(currentElement.val() == '') {
                currentElement.parent().removeClass('md-input-has-value');
            }
        };

        vm.closeModal =function(){
            vm.clearFields();
            postModal.Modal.hide();
        };

        vm.createPost = function(){
            if(angular.element(document.querySelectorAll('[aria-invalid=true]')).length == 0){
                var now = new Date();


                var newPost = {
                  'Description' : vm.Description,
                    'UserId': $localStorage.User.Email,
                    'Feed_Time' :  now
                };
                $rootScope.$emit('newPost', newPost);
                postService.PostNewFeed(newPost);
                vm.closeModal();
            }
        };

        vm.clearFields = function(){
            vm.Description = '';
            setTimeout(function() {
                angular.element(document.querySelectorAll('[class*=description]')).parent().find('div')[0].innerText = '';
            }, 0.10);
        };

    }

})();

