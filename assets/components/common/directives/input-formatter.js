'use strict';


    angular.module('app.common').directive('inputFormatter', function ($filter, $timeout) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ctrl) {
                scope.$watch(attrs.ngModel, function (v) {
                    if(v){
                        element.val(v.replace(/[^0-9a-zA-Z]/g, ''));
                    }
                });
            }
        };
    });
