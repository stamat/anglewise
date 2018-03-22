'use strict';

import DirectiveTemplateController from './controller';
import directiveTemplateDirective from './directive';


export default angular.module('anglewise.directive-template', [])

  // controllers
  .controller('DirectiveTemplateController', DirectiveTemplateController)

  .directive('template', directiveTemplateDirective);

