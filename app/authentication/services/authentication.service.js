/**
 * Created by mamaya on 30/01/2017.
 */
'use strict';

angular
    .module('tambox.authentication.services')
    .factory('Authentication', Authentication);

Authentication.$inject = ['$http'];

function Authentication($http) {

    var Authentication2 = {
        login: login
    };

    return Authentication2;

    function login(email, password) {
        return $http.post('/api/v1/auth/login/', {
            email: email, password: password
        }).then(loginSuccessFn, loginErrorFn);

        function loginSuccessFn(data, status, headers, config) {
            window.location = '/';
        }

        function loginErrorFn(data, status, headers, config) {
            console.error('Epic failure!');
        }
    }
}