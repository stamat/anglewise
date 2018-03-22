'use strict';

/**
 * @ngdoc interceptor
 * @name authInterceptor
 * @module cathod-angular.auth
 * @description
 * Needed to redirect user to login page if server responds with
 *  403 not found or 401 forbidden status.
 * @return {Object}
 */

export default [
  '$q',
  '$injector',
  function($q, $injector) {

    return {
      /**
       * Fires only if error is encountered.
       */
      'responseError': function(response) {
        if(response.status === 401 || response.status === 403) {
          //$injector.get('$state').go('root.logout');
        } 
        /** There should be and else if branch that checks the
         *  global config and returns the errors from some
         *  errorService or something similar
         */  
        return $q.reject(response);
      }
    };

  }
];
