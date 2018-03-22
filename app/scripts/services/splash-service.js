'use strict';

/*
 * This service is a global service used to invoke splash screens ->
 * Displaying and hiding messages with icons of success and error states.
 *
 * Include this service in your controller and pass the title, text and icon name.
 * Or use the predefined presets.
 **/

export default [
  '$window',
  '$state',
  '$rootScope',
  '$log',
  function splashService($window,
                         $state,
                         $rootScope,
                         $log) {
  var fn = {};
  var presets = {
    'password-sent': {
      'title': 'Password Sent',
      'subtitle': 'Temporary password sent to your email, check your inbox.',
      'icon': 'icon-sent',
      'close_text': 'OK, Got it!'
    },
    'username-sent': {
      'title': 'Username Sent',
      'subtitle': 'Your username was sent to your email, check your inbox.',
      'icon': 'icon-sent',
      'close_text': 'OK, Got it!'
    },
    'password-saved': {
      'title': 'Saved',
      'subtitle': 'Your new password has been saved.',
      'icon': 'icon-ok',
      'close_text': 'OK, Got it!'
    },
    'account-updated': {
      'title': 'Account Updated',
      'subtitle': 'Your information has been saved',
      'icon': 'icon-ok',
      'close_text': 'OK, Got it!'
    },
    'payment-saved': {
      'title': 'Payment Saved',
      'subtitle': 'Your payment information has been saved',
      'icon': 'icon-ok',
      'close_text': 'OK, Got it!'
    }
  };

  fn.hide = function() {
    $('body').removeClass('modal-shown');
    $('.modal').fadeOut('slow');
  };

  fn.showSplash = function(title, subtitle, icon, close_text) {
    var $splash = $('#splash');

    if ($('body').hasClass('modal-shown')) {
      fn.hide();
    }

    if (!close_text) {
      close_text = 'OK, Got it!';
    }

    $splash.find('h1').html(title);
    $splash.find('.sub').html(subtitle);
    $splash.find('.icon-wrap i').attr('class', icon);
    $splash.find('.close-wrap a').html(close_text);

    $splash.fadeIn('slow');

    $('body').addClass('modal-shown');
  };

  fn.show = function(param) {
    if (typeof param === 'string') {
      param = param.toLowerCase().split(' ').join('-');

      if (presets.hasOwnProperty(param)) {
        param = presets[param];
      } else {
        $log.error('Unexisting splash preset: '+ param);
        var all_presets = [];

        for (var k in presets) {
          all_presets.push(k);
        }

        $log.log('Avalable splash presets: '+ all_presets.join(', '));
        return;
      }
    }

    fn.showSplash(param.title, param.subtitle, param.icon, param.close_text);
  };

  return fn;

}];
