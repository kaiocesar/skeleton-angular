var appCtrl = angular.module('starter.controllers', []);

appCtrl.controller('HomeCtrl', ['$scope','$http', function($scope, $http){
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
}]);
