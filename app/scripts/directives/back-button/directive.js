'use strict';

/**
 */
export default ['$log', function($log) {
  return {

    restrict: 'E',

    templateUrl: 'scripts/directives/back-button/template.html',
    controller: ['$scope', 'loginService', '$window', function($scope, loginService, $window){
      $scope.loggedin = loginService.get;
      $scope.back = function() {
        $window.history.back();
      };
    }],
    scope: true,

    link: function(scope, element, attrs) {

    }
  };
}];
