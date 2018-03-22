'use strict';

/*
 * This service is a global service used to invoke modal screens ->
 * Displaying and hiding modals. Modals can be requested by registered name or by their unique element ID selector
 * 
 **/

export default [
  '$window',
  '$state',
  '$rootScope',
  '$log',
  function modalService($window,
                         $state,
                         $rootScope,
                         $log) {
  var fn = {};
  var registered = {};
  
  fn.hide = function() {
    $('body').removeClass('modal-shown');
    $('.modal').fadeOut('slow');
  };
  
  var show = function(elem) {
    $('body').addClass('modal-shown');
    $(elem).fadeIn('slow');
  };
  
  fn.register = function(name, element) {
    registered[name] = element;
  };
  
  fn.show = function(name) {
    
    if ($('body').hasClass('modal-shown')) {
      fn.hide();
    }

    if (typeof name === 'object') { // it's aalready a DOM
      show(name);
      return;
    }
    
    if (/^#/gi.test(name)) { // it's a selector
      show($(name));
      return;
    }
    
    if (registered.hasOwnProperty(name)) { // it's a registered name
      var $elem = $(registered[name]);
      if (!$elem.hasClass('modal')) {
        $elem = $elem.find('.modal');
      }
      show($elem);
      return;
    } else {
      $log.error('Unregistered modal requested: '+ name);
      var all_presets = [];
      
      for (var k in registered) {
        all_presets.push(k);
      }
      
      $log.log('Avalable modals to be requested: '+ all_presets.join(', '));
      return;
    }
  };
    
  return fn;

}];