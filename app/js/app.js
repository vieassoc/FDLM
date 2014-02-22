'use strict';

/* App Module */

var App = angular.module('fdlmApp', [
	'ngRoute',
	'appControllers',
	'appServices',
	'leaflet-directive',
]);

App.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/index.html',
				controller: 'NewsListCtrl'
			}).

			when('#/', {
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
				templateUrl: 'partials/contact.html', 
				controller: 'MapCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
