/**
 * Created by inkarri on 30/01/17.
 */
'use strict';

'use strict';

angular
    .module('tambox.config')
    .config(config);

config.$inject = ['$locationProvider'];

function config($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}