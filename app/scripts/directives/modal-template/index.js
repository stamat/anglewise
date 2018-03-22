'use strict';

import ModalLoginPatient from './controller';
import modalLoginPatient from './directive';


export default angular.module('anglewise.modal-login-user', [])

  // controllers
  .controller('ModalLoginUser', ModalLoginPatient)

  .directive('modalLoginUser', modalLoginPatient);
