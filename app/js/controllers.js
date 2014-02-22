'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', [
  'ngSanitize',
    'leaflet-directive',

  ]);

appControllers.controller('NewsListCtrl', ['$scope', 'News', 'Menu', 'Gallery',
  function($scope,News,Menu,Gallery) {
    $scope.news = News.query();
    $scope.menu = Menu.query();
    $scope.gallery = Gallery.query({'idGallery':1});
  }]);

appControllers.controller('MenuCtrl', ['$scope', 'Menu',
  function($scope,Menu) {
    $scope.menu = Menu.query();
  }]);

appControllers.controller('TemplateCtrl', ['$scope', 'GeneralInformation',
  function($scope,GeneralInformation) {
    $scope.general_info = GeneralInformation.query();
  }]);

appControllers.controller('MapCtrl', ['$scope',
  function($scope) {
    angular.extend($scope, {
        center: {
            lat: 43.310995,
            lng: 1.935181,
            zoom: 09
          },
          markers: {
            marker: {
                lat: 43.110995,
                lng: 1.935181,
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
                      cloudmade2: {
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
