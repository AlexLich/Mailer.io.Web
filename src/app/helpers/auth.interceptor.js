(function () {
    angular
        .module('app')
        .factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = ['$rootScope', '$q', '$location', 'localStorageService'];

    /* @ngInject */
    function authInterceptorService($rootScope, $q, $location, localStorageService) {
        var service = {
            request: request,
            responseError: responseError
        };

        return service;

        ////////////////

        function request(config) {
            config.headers = config.headers || {};
            var authData = localStorageService.get('authData');
            if (authData) {
                config.headers.Authorization = 'Bearer' + authData.token;

            }
            return config;
        }

        function responseError(rejection) {
            if (rejection.status === 401) {
                $rootScope.$broadcast('logOff');
                $location.path('/login');
            }
            return $q.reject(rejection);
        }
    }

})();
