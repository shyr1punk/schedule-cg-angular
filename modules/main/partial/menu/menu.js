angular.module('main').controller('MenuCtrl',function($scope, menuService) {


    $scope.getFaculties = function () {
        menuService.getFaculties().
            success(function (data) {
                $scope.buttons = data.faculties;
            }).
            error(function (data) {
                console.log(data);
            });
    };

    $scope.getFaculties();

});