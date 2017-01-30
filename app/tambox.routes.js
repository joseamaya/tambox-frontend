/**
 * Created by mamaya on 27/01/2017.
 */
'use strict';

angular
    .module('tambox.routes')
    .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider.when('/login', {
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: '/views/authentication/login.html'
    }).otherwise('/');
}