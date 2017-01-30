/**
 * Created by mamaya on 30/01/2017.
 */
'use strict';

angular
    .module('tambox.authentication.services')
    .factory('Authentication', Authentication);

Authentication.$inject = ['$cookies', '$http'];

function Authentication($cookies, $http) {

    var Authentication = {
        login: login,
    };

    return Authentication;

    function login(email, password) {
        return $http.post('/api/v1/auth/login/', {
            email: email, password: password
        }).then(loginSuccessFn, loginErrorFn);

        /**
         * @name loginSuccessFn
         * @desc Set the authenticated account and redirect to index
         */
        function loginSuccessFn(data, status, headers, config) {
            Authentication.setAuthenticatedAccount(data.data);

            window.location = '/';
        }

        /**
         * @name loginErrorFn
         * @desc Log "Epic failure!" to the console
         */
        function loginErrorFn(data, status, headers, config) {
            console.error('Epic failure!');
        }
    }
}