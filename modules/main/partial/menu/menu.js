angular.module('main').controller('MenuCtrl',function($scope, menuService, $animate) {

    $animate.enabled(false);

    /**
     * Save selected menu items
     *
     * @type {Object}
     */
    $scope.history = {};

    /**
     * Get faculty list
     */
    $scope.getFaculties = function () {
        menuService.getFaculties().
            success(function (data) {
                $scope.buttons = data.faculties;
                $scope.history.faculty = null;
                $scope.menuButtonClick = $scope.getSpecialities;
            }).
            error(function (data) {
                console.log(data);
            });
    };

    /**
     * Get specialities by faculty
     *
     * @param {Number} faculty faculty id
     */
    $scope.getSpecialities = function (faculty) {
        menuService.getSpecialities(faculty).
            success(function (data) {
                $scope.buttons = data.spec;
                $scope.history.faculty = faculty;
                $scope.history.speciality = null;
                $scope.menuButtonClick = $scope.getGroups;
            }).
            error(function (data) {
                console.log(data);
            });
    };

    /**
     * Get groups list by speciality
     *
     * @param {Number} speciality speciality id
     */
    $scope.getGroups = function (speciality) {
        menuService.getGroups($scope.history.faculty, speciality).
            success(function (data) {
                $scope.buttons = data.groups;
                $scope.history.speciality = speciality;
                $scope.menuButtonClick = function () {};
            }).
            error(function (data) {
                console.log(data);
            });
    };

    /**
     * Button back menu
     *
     * @param {Number} faculty faculty id
     * @param {Number} speciality speciality id
     */
    $scope.menuBack = function (faculty, speciality) {
        if (faculty) {
            if (speciality) {
                $scope.getSpecialities(faculty, speciality);
            } else {
                $scope.getFaculties(faculty);
            }
        }
    };

    $scope.getFaculties();

});