/*global define */
define([
    'angular',
    'ngRoute',
    'ngResource',
    'ngMock',

    'modules/bread-units/bread-units-bootstrap'
], function(angular) {
    'use strict';

    return angular.module('diabetes', [
        // Angular Modules
        'ngRoute',
        'ngResource',
        'ngMockE2E',

        // 3-rd Part modules

        // Application Modules
        'diabetes.bread-units'
    ]);
});
