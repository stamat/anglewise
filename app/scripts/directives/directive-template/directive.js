'use strict';

/**
 */
export default ['$log', function($log) {
  return {

    restrict: 'E',

    templateUrl: 'scripts/directives/directive-template/template.html',
    controller: 'DirectiveTemplateController',
    scope: true,

    link: function(scope, element, attrs) {
        //here we do a bit of linking or executing jQuery
    }
  };
}];
