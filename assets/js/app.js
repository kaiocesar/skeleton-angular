
var app = angular.module('starter', ['starter.controllers','starter.services', 'ngRoute']);


app.factory('authInterceptor','starter.services.authInterceptor');

// app config
app.config(['$routeProvider', function($routeProvider){

	$routeProvider

	.when('/home', {
		templateUrl: 'assets/templates/home.html',
		controller: 'HomeCtrl'
	})

	.when('/about', {
		templateUrl: 'assets/templates/about.html',
		controller: 'HomeCtrl'
	})

	.when('/contacts', {
		templateUrl: 'assets/templates/contacts.html',
		controller: 'HomeCtrl'
	})

	.when('/send-contact', {
		templateUrl: 'assets/templates/send-contact.html',
		controller: 'HomeCtrl'
	})

	.when('/signin', {
		templateUrl: 'assets/templates/signin.html',
		controller: 'HomeCtrl'
	})

	.when('/signup', {
		templateUrl: 'assets/templates/signup.html',
		controller: 'HomeCtrl'
	})

	.otherwise({
		redirectTo: '/home'
	});


}]);
