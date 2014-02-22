'use strict';

describe('Controller: NewsListCtrl', function () {

  // load the controller's module
  beforeEach(module('fdlmApp'));

  var NewsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsListCtrl = $controller('NewsListCtrl', {
      $scope: scope
    });
  }));

});
