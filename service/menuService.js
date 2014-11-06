angular.module('schedule').factory('menuService',function($http, constantsService) {

	var menuService = {
        /**
         * Get faculties list from server
         *
         * @returns {HttpPromise}
         */
        getFaculties: function () {
            return $http.get(constantsService.apiGetEndpoint() + '/faculties');
        }
    };

	return menuService;
});