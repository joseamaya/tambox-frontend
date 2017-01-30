/**
 * Created by mamaya on 30/01/2017.
 */
'use strict';

angular
    .module('tambox.authentication', [
        'tambox.authentication.controllers',
        'tambox.authentication.services'
    ]);

angular
    .module('tambox.authentication.controllers', []);

angular
    .module('tambox.authentication.services', ['ngCookies']);