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
			when('/programmation-ariege-n-zik-vendredi-14-juin-2014', {
				templateUrl: 'partials/prog-vendredi.html'
			}).
			when('/programmation-ariege-n-zik-samedi-15-juin-2014', {
				templateUrl: 'partials/prog-samedi.html'
			}).
			when('/archive-faites-de-la-musique-fdlm-2013', {
				templateUrl: 'partials/archive.html'
			}).
			when('/association-faites-de-la-musique', {
				templateUrl: 'partials/association.html'
			}).
			when('/contact', {
				templateUrl: 'partials/contact.html',
				controller: 'ContactCtrl'
			}).
			when('/artiste/hassah', {
				templateUrl: 'partials/artiste.html',
				controller: 'ContactCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);

