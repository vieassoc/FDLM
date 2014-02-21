'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('News', ['$resource',
	function($resource){
		return $resource('vieassociative/news.json', {}, {
			query: {method:'GET', isArray:true}
		});
	}]);

appServices.factory('Menu', ['$resource',
	function($resource){
		return $resource('vieassociative/menu.json', {}, {
			query: {method:'GET', isArray:true}
		});
	}]);

appServices.factory('Gallery', ['$resource',
	function($resource){
		return $resource('vieassociative/gallery:idGallery.json', {}, {
			query: {method:'GET', isArray:true}
		});
	}]);

appServices.factory('GeneralInformation', ['$resource',
	function($resource){
		return $resource('vieassociative/association1.json', {}, {
			query: {method:'GET'}
		});
	}]);

appServices.factory('Page', [
	function(){
		var title = "Index";
		return {
			title: function() { return title; },
			setTitle: function(newTitle) { title = newTitle }
		};
	}]);