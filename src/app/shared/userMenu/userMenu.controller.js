(function () {
    angular
        .module('app')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$location','authService'];

    /* @ngInject */
    function UserMenuController($location, authService) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'UserMenuController';
        vm.logOut = logOut;

        activate();

        ////////////////

        function activate() {
        }

        function logOut() {
            authService.logOut();

            $location.path('/login');
        }
    }
})();
