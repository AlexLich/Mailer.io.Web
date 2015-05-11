(function () {
    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['authService'];

    /* @ngInject */
    function IndexController(authService) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'IndexController';
        vm.isAuth = authService.authentication.isAuth;
        console.log(vm.isAuth);

        activate();

        ////////////////

        function activate() {

        }


    }
})();
