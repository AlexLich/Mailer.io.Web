(function () {
    angular
        .module('app')
        .directive('userMenu', userMenu);

    function userMenu() {
        var directive = {
            restrict: 'E',
            replace: true,
            link: link,
            templateUrl: 'shared/userMenu/userMenu.html'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$on('logOff', function () {

                scope.isAuth = false;
                //console.log(scope.isAuth);
            });

            scope.$on('logOn', function () {
                scope.isAuth = true;
                //console.log(scope.isAuth);
            });
        }
    }
})();
