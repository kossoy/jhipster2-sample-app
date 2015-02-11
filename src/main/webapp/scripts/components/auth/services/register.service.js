'use strict';

angular.module('sprangmoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


