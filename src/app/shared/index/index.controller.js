(function () {
    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'authService'];

    /* @ngInject */
    function IndexController($scope, authService) {
        /* jshint validthis: true */
        var index = $scope;

        index.activate = activate;
        index.title = 'IndexController';
        index.isAuth = authService.authentication.isAuth;
        console.log('isAuth: ' + index.isAuth);

        activate();

        ////////////////

        function activate() {

        }


    }
})();
