(function () {
    angular
        .module('app', [
            'app.core'
        ])
        .config(config);

    function config($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    }
})();
