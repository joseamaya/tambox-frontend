/**
 * Created by mamaya on 30/01/2017.
 */
'use strict';

angular
    .module('tambox.authentication.controllers')
    .controller('LoginController', LoginController);

LoginController.$inject = ['Authentication'];

function LoginController(Authentication) {
    var vm = this;

    vm.login = login;

    function login() {
        Authentication.login(vm.email, vm.password);
    }
}