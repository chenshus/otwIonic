(function() {

    angular
        .module('app.post')
        .controller('Post', Post);

    function Post($rootScope,postModal){ //postService?

        var vm= this;

        vm.closeModal =function(){
            postModal.Modal.hide();
        };

        vm.createPost = function(newPost){

//            postService.PostNewFeed(newPost);
            $rootScope.$emit('newPost',newPost);
            vm.closeModal();
            newPost.description='';
        }
    }

})();

