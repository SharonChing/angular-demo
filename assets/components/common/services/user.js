'use strict';

  angular.module('app.common').service('User', function($http, HttpResource) {
    return {
      login: function(username, password) {
          var data = {
              username: username,
              password: password
          };
          return HttpResource.deferWrap($http.post(global.ENV.remoteHost + 'authentication', data));
      },
      logout: function() {
        return HttpResource.deferWrap($http.delete(global.ENV.remoteHost + 'authentication'));
      }
    };
  });
