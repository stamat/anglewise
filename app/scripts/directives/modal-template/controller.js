'use strict';

export default [
  '$scope',
  '$rootScope',
  '$state',
  'loginService',
  function( $scope,
            $rootScope,
            $state,
            loginService) {

    $scope.signin = function() {
      loginService.set('user');
      $state.go('root.profile');
    };
  }
];
