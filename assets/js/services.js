var appServices = angular.module('starter.services', []);

appServices.service('LoginService', function($q){

  return {
      authService: function($window){
        var self = this;
      },

      userService: function($http, API, auth){
        var self = this;
        self.getQuote = function(){
          return $http.get(API + '/auth/quote');
        };
      },

      authInterceptor: function(API, auth){
        return {
          request: function(config){
            return config;
          }
        };
      }
  };

});
