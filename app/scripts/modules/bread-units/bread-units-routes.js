/*global define */
define(['modules/bread-units/bread-units-module'], function(breadUnits) {
    'use strict';
    return breadUnits.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bread-units', {
            templateUrl: 'scripts/modules/bread-units/bread-units-layout.html',
            controller: 'BreadUnitsController as vm'
        });

        $routeProvider.otherwise({
            redirectTo: '/bread-units'
        });
    }]);
});
