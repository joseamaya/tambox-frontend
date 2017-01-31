/**
 * Created by mamaya on 27/01/2017.
 */
'use strict';

angular
    .module('tambox', [
        'tambox.config',
        'tambox.routes',
        'tambox.authentication'
    ]);

angular
    .module('tambox.config', []);

angular
    .module('tambox.routes', ['ngRoute']);

angular
    .module('tambox')
    .run(run);

run.$inject = ['$http'];

function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
}