angular.module('schedule', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'main']);

angular.module('schedule').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('schedule').run(function($rootScope) {

    $.material.init();

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

// http://thegreenpizza.github.io/2013/05/25/building-minification-safe-angular.js-applications/

angular.module('schedule').service('constantsService', [ function() {
    var constantsService = {
        apiGetEndpoint: function () {
            return '/api/';
        }
    };
    return constantsService;
}]);