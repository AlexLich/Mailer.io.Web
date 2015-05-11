(function () {
    angular
        .module('app')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['$location', 'contactService'];

    /* @ngInject */
    function ContactsController($location, contactService) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'ContactsController';
        vm.persons = [];
        vm.editContact = editContact;

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

        function editContact(contactId) {
            $location.path('/contact/edit/' + contactId);
        }


    }
})();
