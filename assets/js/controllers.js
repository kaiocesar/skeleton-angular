var appCtrl = angular.module('starter.controllers', []);

appCtrl

.constant('API', 'http://api.mangoweb.com.br/api.php')

.controller('HomeCtrl', ['$scope','$http', function($scope, $http){
	$scope.data = {};
	$scope.showError = false;
	$scope.messageError = '';

	$scope.SendMessage = function(){
		$http({
			method: 'GET',
			url: 'http://api.mangoweb.com.br/api.php'
		})
		.then(function(response){
				if(response.data) {
					$scope.showError = true;
					$scope.messageError = 'Erro no envio 200';
				}
		}, function(response){
			$scope.showError = true;
			$scope.messageError = 'Request failed';
		});
	};
}])

.controller('UserController', ['$scope', '$http', function($scope, $http, user, auth){
	var self = this;

	function handleRequest(res) {
    var token = res.data ? res.data.token : null;
    if(token) { console.log('JWT:', token); }
    self.message = res.data.message;
  }

  self.login = function() {
    user.login(self.username, self.password)
      .then(handleRequest, handleRequest)
  }
  self.register = function() {
    user.register(self.username, self.password)
      .then(handleRequest, handleRequest)
  }
  self.getQuote = function() {
    user.getQuote()
      .then(handleRequest, handleRequest)
  }
  self.logout = function() {
    auth.logout && auth.logout()
  }
  self.isAuthed = function() {
    return auth.isAuthed ? auth.isAuthed() : false
  }

}]);
