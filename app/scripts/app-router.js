'use strict';

/**
 * Configure routes for main app.
 *
 * @description
 * Top-level app router and configuration, used to provide fallback and
 * utility routes (500, 404) while delegating most of the routing jobs to
 * modules' routers.
 *
 * @requires $stateProvider
 * @requires $urlRouterProvider
 * @requires $httpProvider
 */
export default [
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  function($stateProvider,
           $urlRouterProvider,
           $httpProvider) {

    $httpProvider.defaults.withCredentials = true;


    // Sets default route which triggers in case requested route wasn't
    // specified anywhere throughout the entire application.
    $urlRouterProvider.otherwise(function($injector, $location) {
      $injector.invoke(['$state', function($state) {
            $state.go('root.home');
      }]);
    });

    function onEnter() {
      // things to clean up on state change
    }

    /* ROOT resolves data needed everywhere and defines shared parent AppController */
    $stateProvider
      .state('root', {
        views: {
          '': {
            templateUrl: 'scripts/base/layout.html',
            controller: 'AppController'
          },
          'header@root': {
            templateUrl: 'scripts/base/header.html',
            controller: 'AppController'
          },
          'main@root': {
            templateUrl: 'scripts/base/main.html'
          },
          'footer@root': {
            templateUrl: 'scripts/base/footer.html'
          },
          'modals@root': {
            templateUrl: 'scripts/base/modals.html'
          }
        },
        resolve: {
          loggedin: ['$rootScope', function($rootScope){
            //if (!$rootScope.loggedin) {
            //  $rootScope.loggedin = null;
            //}

            //return $rootScope.loggedin; // null - for logged out state, 'user' - for loggedin patient, 'therapist' - for logged in therapist
          }]
        },
        onEnter: onEnter
      })

      .state('root.home', {
        url: '/home',
        public: true,
        views: {
          'main@root': {
            templateUrl: 'scripts/pages/page-template/page-template.html',
            controller: 'AppController'
          }
        },

        onEnter: onEnter,
        resolve: {
          loggedin: ['loginService', function(loginService){
            loginService.set(null);
            return null;
          }]
        }
    }).state('root.profile', {
          url: '/profile',
          public: true,
          views: {
            'main@root': {
              templateUrl: 'scripts/pages/page-template/page-template.html',
              controller: 'AppController'
            }
          }
      });
  }
];
