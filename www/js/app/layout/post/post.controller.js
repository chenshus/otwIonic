(function() {

    angular
        .module('app.post')
        .controller('Post', Post);

    function Post($rootScope,postModal){ //postService?

        var vm= this;
        vm.description = "";

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
//          postService.PostNewFeed(newPost);
            if(angular.element(document.querySelectorAll('[aria-invalid=true]')).length == 0){
                var newPost = {
                  'description' : vm.description
                };
                $rootScope.$emit('newPost', newPost);
                vm.closeModal();
            }
        };

        vm.clearFields = function(){
            vm.description = '';
            setTimeout(function() {
                angular.element(document.querySelectorAll('[class*=description]')).parent().find('div')[0].innerText = '';
            }, 0.10);
        };

    }

})();

