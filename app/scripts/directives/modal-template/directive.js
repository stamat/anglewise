'use strict';

/**
 */
export default ['$log', 'modalService', function($log, modalService) {
  return {

    restrict: 'E',

    templateUrl: 'scripts/directives/modal-template/template.html',
    controller: 'ModalLoginUser',
    scope: true,

    link: function(scope, element, attrs) {
        //here we do a bit of linking or executing jQuery
        scope.hide = modalService.hide;
        scope.show = modalService.show;
        modalService.register('modal-login-user', element);
    }
  };
}];
