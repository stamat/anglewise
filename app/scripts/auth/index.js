'use strict';

import authRoutes from './auth-routes';

import AuthController from './auth-controller';
import authInterceptor from './auth-interceptor';

/**
 * Create authentication module...
 */
export default angular.module('anglewise.auth', [
  'ui.router'
])

/**
 * Load up the routes that are specific for auth component only.
 * All other routes belong to their respective components.
 * After routes, load controller and service.
 */
  .config(authRoutes)

  .controller('AuthController', AuthController)
 
  .factory('authInterceptor', authInterceptor);
