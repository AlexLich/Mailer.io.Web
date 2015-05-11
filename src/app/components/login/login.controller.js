(function () {
    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', 'authService'];

    /* @ngInject */
    function LoginController($scope, $location, authService) {
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
            console.log('login');
            authService.login(vm.loginData).$promise
                .then(function (response) {
                    $scope.$emit('logOn');
                    $location.path('/home');
                }, function (errorResponse) {

                });

        }

        function addAlert(message, type) {
            vm.alerts.push({
                message: message,
                type: type
            });
        }

    }
})();
