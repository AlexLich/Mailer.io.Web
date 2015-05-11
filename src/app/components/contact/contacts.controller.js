(function () {
    angular
        .module('app')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['contactService'];

    /* @ngInject */
    function ContactsController(contactService) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'ContactsController';
        vm.persons = [];

        activate();

        ////////////////

        function activate() {
            getPersons();
        }

        function getPersons() {
            contactService.getPersons().$promise
                .then(function (results) {
                    vm.persons = results;
                }, function (error) {

                });
        }


    }
})();
