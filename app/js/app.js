'use strict';
/* Google Analytics*/
(function(angular) { 

  angular.module('analytics', ['ng']).service('analytics', [
    '$rootScope', '$window', '$location', function($rootScope, $window, $location) {
      var track = function() {
        $window._gaq.push(['_trackPageview', $location.path()]);
      };
      $rootScope.$on('$viewContentLoaded', track);
    }
  ]);

}(window.angular));
/* end Google Analytics*/

/* App Module */

var App = angular.module('fdlmApp', [
	'ngRoute',
	'appControllers',
	'appServices',
	'leaflet-directive',
	'angularSmoothscroll',
	'analytics',
]);

App.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/home.html',
				controller: 'NewsListCtrl'
			}).
			when('/programmation-ariege-n-zik-vendredi-13-juin-2014', {
				templateUrl: 'partials/prog-vendredi.html'
			}).
			when('/programmation-ariege-n-zik-samedi-14-juin-2014', {
				templateUrl: 'partials/prog-samedi.html'
			}).
			when('/archive-faites-de-la-musique-fdlm-2013', {
				templateUrl: 'partials/archive.html'
			}).
			when('/association-faites-de-la-musique', {
				templateUrl: 'partials/association.html',
				controller: 'AssociationCtrl'
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

App.config(function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       // Allow loading from our assets domain.  Notice the difference between * and **.
       "http://www.youtube.com/embed/**",
       "https://www.youtube-nocookie.com/**"
       ]);

     }
);
/*
App.directive('scrollTo', function ($location, $anchorScroll) {
    return function(scope, element, attrs) {
    element.bind('click', function(event) {
			event.stopPropagation();
			scope.$on('$locationChangeStart', function(ev) {
			  ev.preventDefault();
			});
			var location = attrs.scrollTo;
			$location.hash(location);
			$anchorScroll();
		});
	};
  });
*/
