'use strict';

/**
 * @ngdoc router
 * @description
 * Handles routes needed for auth component to work. All non-auth routes should
 * be set on their respecitve components.
 * @requires $stateProvider
 */
export default [
  '$stateProvider',
  '$httpProvider',
  function($stateProvider,
           $httpProvider) {

    $httpProvider.interceptors.push('authInterceptor');
  }
];
