'use strict';

/* Services */

var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('News', ['$resource',
    function($resource) {
        return $resource('http://www.vieassociative.fr/api/0.1/association/5/news', {}, { //vieassociative/news.json
            query: {
                method: 'GET',
                isArray: false
            }
        });
    }
]);

appServices.factory('Menu', ['$resource',
    function($resource) {
        return $resource('vieassociative/menu.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);

appServices.factory('Gallery', ['$resource',
    function($resource) {
        return $resource('vieassociative/gallery:idGallery.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);

appServices.factory('Staff', ['$resource',
    function($resource) {
        return $resource('vieassociative/staff.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);

appServices.factory('Programmation', ['$resource',
    function($resource) {
        return $resource('vieassociative/programmation.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);

appServices.factory('GeneralInformation', ['$resource',
    function($resource) {
        return $resource('vieassociative/association1.json', {}, {
            query: {
                method: 'GET'
            }
        });
    }
]);

appServices.factory('Page', function() {
    var title = 'Ariege\'n ZIC';
    return {
        title: function() {
            return title;
        },
        setTitle: function(newTitle) {
            title = newTitle;
        }
    };
});