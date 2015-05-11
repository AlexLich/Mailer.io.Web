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
            .when('/contact',
            {
                templateUrl: 'components/contact/contacts.html',
                controller: 'ContactsController'
            })
            .when('/schedule',
            {
                templateUrl: 'components/schedule/schedule.html',
                controller: 'ScheduleController'
            })
            .otherwise('/login');
    }
})();
