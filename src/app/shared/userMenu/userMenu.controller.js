(function () {
    angular
        .module('app')
        .controller('UserMenuController', UserMenuController);

    UserMenuController.$inject = ['$scope', '$location','authService'];

    /* @ngInject */
    function UserMenuController($scope, $location, authService) {
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
            $scope.$emit('logOff');
            $location.path('/login');
        }
    }
})();
