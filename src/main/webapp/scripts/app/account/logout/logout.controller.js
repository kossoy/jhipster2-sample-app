'use strict';

angular.module('sprangmoApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
