require([
    'angular',
    'app',
    'config/ng-mock/ng-mock-config'
], function(angular, app, ngMockConfig) {
    'use strict';

    /**
     * Run congifurations
     */
    app.run(ngMockConfig);

    /**
     * Bootstraps angular onto the window.document node
     */
    return angular.bootstrap(document, [app.name]);
});
