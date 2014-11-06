angular.module('schedule').factory('menuService',function($http, constantsService) {

	var menuService = {
        /**
         * Get faculties list from server
         *
         * @returns {HttpPromise}
         */
        getFaculties: function () {
            return $http.get(constantsService.apiGetEndpoint() + 'faculties');
        },

        /**
         * Get speciality list by faculty
         *
         * @param {Number} faculty faculty id
         * @returns {HttpPromise}
         */
        getSpecialities: function (faculty) {
            return $http.get(constantsService.apiGetEndpoint() + 'faculty/' + faculty);
        }
    };

	return menuService;
});