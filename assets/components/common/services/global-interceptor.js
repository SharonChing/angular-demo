'use strict';
    angular.module('app.common').factory('GlobalInterceptor', function ($q, $injector, Storage) {
        return {
            request: function (config) {
                config = config || $q.when(config);
                var token = Storage.get('local', 'x-auth-token');
                if (!token) {
                    window.location.hash = '';
                }
                if (token) {
                    config.headers['x-auth-token'] = token;
                }

                return config;
            },
            responseError: function(rejection){
                return $injector.invoke(function (Storage, $state, Loader) {
                    var status = rejection.status;
                    if (status === 403 || status === 401) {
                      Loader.hide();
                      Storage.remove('session', 'user');
                      $state.go('app.login');
                    }
                    return $q.reject(rejection);
                });
            }
        };
    });
