(function () {
    angular
        .module('app')
        .factory('serviceHelper', serviceHelper);

    serviceHelper.$inject = ['$resource'];

    /* @ngInject */
    function serviceHelper($resource) {

        var baseUrl = 'http://localhost:7777/';

        var service = {
            authorizationToken: authorizationToken(),
            contact: contact()
        };

        return service;

        ////////////////

        function authorizationToken() {
            console.log(baseUrl);
            return $resource
            (
                buildUrl('token'),
                null,
                {
                    requestToken: {
                        method: 'post',
                        headers: {"Content-Type": "application/x-www-form-urlencoded"}
                    }
                }
            );
        }

        function contact() {
            return $resource
            (
                buildUrl('api/contact/:personId'),
                {
                    personId: '@personId'
                }
            );
        }

        function buildUrl(url) {
            return baseUrl + url;
        }

    }

})();
