'use strict';
    angular.module('app.common').service('Layout', function($rootScope) {
        return {
            noFrame: function ($scope) {
                $rootScope.noFrame = true;
                $scope.$on('$destroy', function () {
                    $rootScope.noFrame = false;
                });
            }
        };
    });
