(function () {
    angular
        .module('app')
        .factory('authService', authService);

    authService.$inject = ['$rootScope','localStorageService', 'serviceHelper'];

    /* @ngInject */
    function authService($rootScope, localStorageService, serviceHelper) {

        var token = serviceHelper.authorizationToken;
        var account = serviceHelper.account;

        var authentication = {
            isAuth: false,
            username: ""
        };

        var service = {
            authentication: authentication,
            login: login,
            logOut: logOut,
            fillAuthData: fillAuthData
        };

        return service;

        ////////////////

        function login(loginData) {
            var dataUser = {
                username: loginData.username,
                password: loginData.password,
                grant_type: 'password'
            };

            var user = buildData(dataUser);
            return token.requestToken(user, function (response) {
                localStorageService.set('authData', {
                    token: response.access_token,
                    username: dataUser.username
                });



                authentication.isAuth = true;
                authentication.username = dataUser.username;

                console.log('Get token');
                console.log(authentication.isAuth);
            });
        }

        function logOut() {
            localStorageService.remove('authData');
            authentication.isAuth = false;
            authentication.username = "";
        }

        function fillAuthData() {
            var authData = localStorageService.get('authData');
            if (authData) {
                $rootScope.$broadcast('logOn');
                authentication.isAuth = true;
                authentication.username = authData.username;
            }
        }

        function buildData(data) {
            var dataString = '';
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    dataString += (prop + '=' + data[prop] + '&');
                }
            }
            return dataString.slice(0, dataString.length - 1);
        }


    }

})();
