'use strict';

/*
 * This service is a global login service mockup ->
 * holds wheather user is logged in
 **/

export default [
  '$window',
  '$state',
  '$rootScope',
  '$log',
  function loginService($window,
                         $state,
                         $rootScope,
                         $log) {
  var fn = {};
  var loggedin = null;

  fn.loginAdmin = function() {
    loggedin = 'admin';
  };

  fn.loginUser = function() {
    loggedin = 'user';
  };

  fn.set = function(val) {
    loggedin = val;
  };

  fn.get = function() {
    return loggedin;
  };

  fn.logout = function() {
    loggedin = null;
    $state.go('root.home');
  };

  return fn;

}];
