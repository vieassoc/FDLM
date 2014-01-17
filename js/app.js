'use strict';

/* App Module */

var App = angular.module('fdlmApp', [
	'ngRoute',
	'appControllers',
	'appServices'
]);

App.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/index.html',
				controller: 'NewsListCtrl'
			}).
			when('/programmation-malegoude-faites-de-la-musique', {
				templateUrl: 'partials/prog.html'
			}).
			when('/archive-faites-de-la-musique-fdlm-2013', {
				templateUrl: 'partials/archive.html'
			}).
			when('/association-faites-de-la-musique', {
				templateUrl: 'partials/association.html'
			}).
			when('/contact', {
				templateUrl: 'partials/contact.html'
			}).
			otherwise({
				redirectTo: 'partials/404.html'
			});
	}]);
