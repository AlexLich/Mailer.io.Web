(function () {
    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location'];

    /* @ngInject */
    function LoginController($location) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'LoginController';
        vm.loginData = {
            username: "",
            password: ""
        };

        vm.alerts = [];
        vm.login = login;
        vm.closeAlert = function (index) {
            vm.alerts.splice(index, 1);
        };

        activate();

        ////////////////

        function activate() {
        }

        function login() {
            console.log(vm.loginData);
            $location.path('home');
        }

        function addAlert(message, type) {
            vm.alerts.push({
                message: message,
                type:    type
            });
        }

    }
})();
