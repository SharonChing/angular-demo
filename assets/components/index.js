'use strict';
var ngModule = angular.module('angular-demo', [
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
]);
ngModule.config(function ($locationProvider) {
    $locationProvider.html5Mode(false);
});
ngModule.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
});
ngModule.config(function ($httpProvider) {
    $httpProvider.interceptors.push('GlobalInterceptor');
});
ngModule.run();
