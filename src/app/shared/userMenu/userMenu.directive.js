(function () {
    angular
        .module('app')
        .directive('userMenu', userMenu);

    function userMenu() {
        var directive = {
            link: link,
            templateUrl: 'shared/userMenu/userMenu.html'
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();
