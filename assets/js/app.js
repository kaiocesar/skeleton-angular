
var app = angular.module('starter', ['starter.controllers','starter.services', 'ngRoute']);

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

	.when('/login', {
		templateUrl: 'assets/templates/login.html',
		controller: 'HomeCtrl'
	})

	.otherwise({
		redirectTo: '/home'
	});


}]);
