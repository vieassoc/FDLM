'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', [
  'ngSanitize',
  'leaflet-directive',
]);

appControllers.controller('NewsListCtrl', ['$scope', 'News', 'Menu', 'Gallery',
  function($scope, News, Menu,Gallery) {
    $scope.news = News.query();
    $scope.menu = Menu.query();
    $scope.gallery = Gallery.query({'idGallery':1});
    $scope.getSrcYoutube = function(url){
        return 'https://www.youtube-nocookie.com/embed/'+url;
    }
  }]);

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

appControllers.controller('ContactCtrl', ['$scope', 'Staff',
  function($scope, Staff) {
    $scope.staff = Staff.query();
    /** Leaflet Configuration**/
    angular.extend($scope, {
        center: {
            lat: +'43.310995',
            lng: +'1.935181',
            zoom: +'09'
          },
          markers: {
            marker: {
                lat: +'43.110995',
                lng: +'1.935181',
                message: 'Lieu du Festival: Malegoude',
                focus: true,
                draggable: false
              }
            },
            defaults: {
              scrollWheelZoom: false
            },
            layers: {
                baselayers: {
                    osm: {
                        name: 'OpenStreetMap   ',
                        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        type: 'xyz'
                      },
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
