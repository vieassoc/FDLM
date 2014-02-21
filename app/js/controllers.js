'use strict';

/* Controllers */

var appControllers = angular.module('appControllers', [
  'ngSanitize'
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