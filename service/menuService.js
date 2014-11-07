angular.module('schedule').factory('menuService',function($http, constantsService) {

	var menuService = {
        /**
         * Get faculties list from server
         *
         * @returns {HttpPromise}
         */
        getFaculties: function () {
            return $http.get(constantsService.apiGetEndpoint() + 'faculties', {
                //cache: true
            });
        },

        /**
         * Get speciality list by faculty
         *
         * @param {Number} faculty faculty id
         * @returns {HttpPromise}
         */
        getSpecialities: function (faculty) {
            return $http.get(constantsService.apiGetEndpoint() + 'faculty/' + faculty, {
                //cache: true
            });
        },

        /**
         * Get speciality list by faculty
         *
         * @param {Number} faculty faculty id
         * @param {Number} speciality speciality id
         * @returns {HttpPromise}
         */
        getGroups: function (faculty, speciality) {
            return $http.get(constantsService.apiGetEndpoint() + 'faculty/f' + faculty + '/speciality/' + speciality, {
                //cache: true
            });
        }
    };

	return menuService;
});