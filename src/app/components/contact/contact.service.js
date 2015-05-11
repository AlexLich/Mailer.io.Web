(function () {
    angular
        .module('app')
        .factory('contactService', contactService);

    contactService.$inject = ['serviceHelper'];

    /* @ngInject */
    function contactService(serviceHelper) {

        var resource = serviceHelper.contact;

        var service = {
            getPersons: getPersons
        };

        return service;

        ////////////////

        function getPersons() {
            return resource.query();
        }

    }

})();
