/*global define */
define([], function() {
    'use strict';

    ngMockConfig.$inject = ['$httpBackend'];
    function ngMockConfig($httpBackend) {
        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
        $httpBackend.whenGET(/scripts/).passThrough();
    }

    return ngMockConfig;
});
