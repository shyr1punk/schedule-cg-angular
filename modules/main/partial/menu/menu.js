angular.module('main').controller('MenuCtrl',function($scope, menuService, $animate) {

    $animate.enabled(false);

    $scope.getFaculties = function () {
        menuService.getFaculties().
            success(function (data) {
                $scope.buttons = data.faculties;
            }).
            error(function (data) {
                console.log(data);
            });
    };

    $scope.getSpecialities = function (faculty) {
        menuService.getSpecialities(faculty).
            success(function (data) {
                $scope.buttons = data.spec;
            }).
            error(function (data) {
                console.log(data);
            });
    };

    $scope.menuButtonClick = $scope.getSpecialities;
    $scope.getFaculties();

});