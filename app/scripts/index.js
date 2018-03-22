'use strict';

/**
 * Reads contents of package.json
 * @type {Object}
 */
import 'core-js/shim';
import 'requestanimationframe';
import 'angular';
import 'angular-animate';
import 'angular-ui-router';

// VENDOR
import './vendor/infinite-scroll';
import './vendor/yaru22.angular-timeago';
import './vendor/angular-sanitize';

//import $ from 'jquery';

global.$ = $ = jQuery;

//textfield line counter by stamat
(function($) {
	$.fn.lines = function() {
		var val = '';
		if (this.is('textarea')) {
			val = this.val();
		} else {
			val = this.html();
		}
		var span = $('<span style="position:absolute; left:-9999px; top: 0px; font-size:' + this.css('font-size') + '; width:' + this.width() + 'px; white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;"></style>');
		$(span).html(htmlEncode(val));
		$('body').append(span);
		var lines = $(span).height() / parseInt($(span).css('line-height'), 10);
		if (val.lastIndexOf('\n') == val.length - 1) {
			lines += 1;
		}
		$(span).remove();
		return lines;
	};

    $.fn.textheight = function() {
		var val = '';
		if (this.is('textarea')) {
			val = this.val();
		} else {
			val = this.html();
		}
		var span = $('<span style="position:absolute; left:-9999px; top: 0px; font-size:' + this.css('font-size') + '; width:' + this.width() + 'px; white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;"></style>');
		$(span).html(htmlEncode(val));
		$('body').append(span);
		var lines = $(span).height();
		$(span).remove();
		return lines;
	};
}(jQuery));

import './auth';
import './pages/page-template';

//directives
import './directives/splash';
import './directives/back-button';

//directives-modals
import './directives/modal-template';

import appRouter from './app-router';
import AppController from './app-controller';
import splashService from './services/splash-service';
import modalService from './services/modal-service';
import loginService from './services/login-service';

import run from './run';

var apiBaseUrl = '';


angular.module('anglewise', [
  // thirdparty modules
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'infinite-scroll',
  'yaru22.angular-timeago',

  // views
  'anglewise.auth',
  'anglewise.page-template',
  'anglewise.modal-login-user',

  // directives
  'anglewise.splash',
  'anglewise.back-button'
])
  // Gets app specific router. Only app level routes are housed here,
  // modules' routes should be kept in module's route files.
  .config(appRouter)

  .config(['$httpProvider', function ($httpProvider) {
    //Reset headers to avoid OPTIONS request (aka preflight)
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
  }])

  // Set up constants that are going to be available throughout the application.
  .constant('version', '0.0.1')
  .constant('appName', 'anglewise')
  .constant('API_URL', apiBaseUrl)

  .controller('AppController', AppController)

  .service('splashService', splashService)
  .service('modalService', modalService)
  .service('loginService', loginService)

  .directive('jqueryInit', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      link: function() {
        $timeout(function(){
          $('input').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green'//,
            //increaseArea: '20%' // optional
          });

          $('.datepicker input').datepicker({
            dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ],
            showOtherMonths: true,
            dateFormat: "m/d/y",
            showOn: "none",
            onClose : function(selectedDate) {
                setTimeout(function () {
                    $('.datepicker .overlay').removeClass('open');
                }, 100)
            }
          });

          $('select').select2({
                minimumResultsForSearch: -1
          });

        });
      }
    };
  }])

  .directive('uploadButton', [function(){
    return {
        restrict: 'A',
        link: function(scope, elem) {
          $(elem).find('.button').on('click', function(){
            $(elem).find('input').trigger('click');
          });
        }
    };
  }])


  .directive('active', [function(){
    return {
        restrict: 'A',
        link: function(scope, elem) {
          $(elem).on('click', function(){
            $(this).toggleClass('active');
          });
        }
    };
  }])



  .run(run);
