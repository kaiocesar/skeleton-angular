var appCtrl = angular.module('starter.controllers', []);

appCtrl.controller('HomeCtrl', ['$scope','$http', function($scope, $http){
	$scope.data = {};

	$scope.SendMessage = function(){
		$http({
			method: 'GET', 
			url: 'send-contact.html'
		})
		.then(function(response){
			console.log(response);
		}, function(response){
			console.log('Request failed...');
		});
	};
}]);