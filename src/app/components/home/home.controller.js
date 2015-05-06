(function () {
    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location'];

    /* @ngInject */
    function HomeController($location) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'HomeController';

        activate();

        ////////////////

        function activate() {
        }


    }
})();
