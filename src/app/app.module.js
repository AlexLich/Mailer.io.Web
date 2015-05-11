(function () {
    angular
        .module('app', [
            'app.core'
        ])
        .config(config)
        .run(runBlock);

    function config($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    }

    runBlock.$inject = ['authService'];

    function runBlock(authService) {
        authService.fillAuthData();
    }
})();
