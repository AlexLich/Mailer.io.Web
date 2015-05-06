(function () {
    angular
        .module('app')
        .config(configuration);

    configuration.$inject = ['$routeProvider'];

    function configuration($routeProvider) {
        $routeProvider
            .when('/home',{
                templateUrl: 'components/home/home.html',
                controller: 'HomeController'
            })
            .when('/login',
            {
                templateUrl: 'components/login/login.html',
                controller: 'LoginController'
            })
            .otherwise('/home')
    }

})();
