'use strict';

/**
 */
export default ['$log', 'splashService', function($log, splashService) {
  return {

    restrict: 'E',

    templateUrl: 'scripts/directives/splash/template.html',
    controller: ['$scope', function($scope){

    }],
    scope: true,

    link: function(scope, element, attrs) {
        $(element).find('.modal').on('click', function(){
          splashService.hide();
        });
    }
  };
}];
