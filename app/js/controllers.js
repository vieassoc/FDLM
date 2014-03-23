'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', [
	'ngSanitize',
	'leaflet-directive',
]);

appControllers.controller('MenuCtrl', ['$scope', 'Menu','$route',
	function($scope, Menu, $route) {
	$scope.menu = Menu.query();
	$scope.isActive = function(part){
		var current = window.location.href
		var current_splited = current.split("/");
		return ((current_splited[current_splited.length-2] === part) && (current_splited[current_splited.length-1] === "") || (current.indexOf(part.replace("#","")) > 0));
	};
	}]);

appControllers.controller('TemplateCtrl', ['$scope', 'GeneralInformation',
	function($scope, GeneralInformation) {
	$scope.general_info = GeneralInformation.query();
	}]);

appControllers.controller('NewsListCtrl', ['$scope', 'News', 'Menu', 'Gallery',
	function($scope, News, Menu,Gallery) {
	$scope.news = News.query();
	$scope.menu = Menu.query();
	$scope.gallery = Gallery.query({'idGallery':1});
	$scope.getSrcYoutube = function(url){
		return 'https://www.youtube-nocookie.com/embed/'+url;
	}
	}]);

appControllers.controller('AssociationCtrl', ['$scope', 'Staff',
	function($scope, Staff) {
	$scope.staff = Staff.query();
	}]);

appControllers.controller('ContactCtrl', ['$scope',
	function($scope) {
	/** Leaflet Configuration**/
	angular.extend($scope, {
		center: {
			lat: +'43.310995',
			lng: +'1.935181',
			zoom: +'09'
		},
		markers: [
			{
				lat: +'43.110995',
				lng: +'1.935181',
				message: '<strong>Festival Ariege\'n ZIC</strong><br/>' +
						 '<img src=\'img/logo1.png\' style="height:15px"/>' +
						 '09500 Malegoude<br/><br/>' +
						 'itinéraire : <a target="blank" href="https://maps.google.fr/maps?daddr=malegoude&hl=fr&ll=43.206177,2.109375&spn=0.912897,2.113495&sll=42.943856,1.50092&sspn=1.833603,4.22699&mra=ls&t=m&z=10">google map</a>',
				focus: true,
				draggable: false,
				icon: {
						type: 'awesomeMarker',
						icon: 'music',
						markerColor: 'red',
				}
			},{
				lat: +'43.103054',
				lng: +'1.633945',
				message: '<strong>Pamiers</strong><br/>' +
						 '30 kms<br/>',
				focus: false,
				draggable: false
			},{
				lat: +'43.604957', 
				lng: +'1.447346',
				message: '<strong>Toulouse</strong><br/>' +
						 '100 kms<br/>',
				focus: false,
				draggable: false
			},{
				lat: +'43.213306',
				lng: +'2.345991',
				message: '<strong>Carcasonne</strong><br/>' +
						 '45 kms<br/>',
				focus: false,
				draggable: false
			},{
				lat: +'42.721688',
				lng: +'1.837420',
				message: '<strong>Ax-Les-Thermes</strong>',
				focus: false,
				draggable: false
			}
		],
		defaults: {
			scrollWheelZoom: false,
			fullscreenControl: true,
			fullscreenControlOptions: { // optional
				title:"Show me the fullscreen !"
			}
		},
		layers: {
			baselayers: {
				maptile: {
					name: 'B/W',
					type: 'xyz',
					subdomains: '1234',
					url: 'http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/normal.day.grey/{z}/{x}/{y}/256/png8?token={devID}&app_id={ID}',
					layerParams: {
						devID: 'xyz',
						ID: 'abc',
						subdomains: '1234',
					}
				},
				osm: {
					name: 'OpenStreetMap   ',
					url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					type: 'xyz'
				}

			}
		}
	});
	}]);



/*
appControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
	function($scope, $routeParams, Phone) {
	$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		$scope.mainImageUrl = phone.images[0];
	});

	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
	}
	}]);

*/
