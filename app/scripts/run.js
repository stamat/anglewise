'use strict';

export default [
  '$state',
  '$rootScope',
  function($state,
           $rootScope) {
    
    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  }
];

