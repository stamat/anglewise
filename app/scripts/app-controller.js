'use strict';

//TODO: This controller executed 4 times. It should be a service OR made specific controller for header and layout
export default [
  '$scope',
  '$rootScope',
  '$state',
  '$timeout',
  'loginService',
  'modalService',
  'splashService',
  function($scope,
            $rootScope,
            $state,
            $timeout,
            loginService,
            modalService,
            splashService) {

    $scope.loggedin = loginService.get;
    $scope.state = $state;
    $scope.hide = modalService.hide;
    $scope.show = modalService.show;
    $scope.splashShow = splashService.show;

    console.log('App Controller');
    

    $scope.logout = function(){
      loginService.logout();
    };


    $scope.showLoginUser = function() {
      modalService.show('modal-login-user');
    };
  }
];
