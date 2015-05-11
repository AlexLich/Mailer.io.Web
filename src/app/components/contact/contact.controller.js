(function () {
    angular
        .module('app')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$routeParams', '$location', 'contactService'];

    /* @ngInject */
    function ContactController($routeParams, $location, contactService) {
        /* jshint validthis: true */
        var vm = this;
        vm.activate = activate;
        vm.title = 'ContactController';
        vm.editContact = editContact;

        activate();

        ////////////////

        function activate() {
            if($routeParams.contactId > 0) {
                vm.contact = contactService.getPerson($routeParams.contactId);
            }
        }

        function editContact(contact) {
            console.log(contact);
            $location.url('/contact');
        }
    }
})();
