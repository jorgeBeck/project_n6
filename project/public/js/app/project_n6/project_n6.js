var ticketroll = angular.module('project-n6-app' ,['ui.router','ngAria','ngAnimate','ngMaterial','ngFileUpload','ngMessages', 'vsGoogleAutocomplete']);

ticketroll.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.when("","/").otherwise("/");
  //
  // Now set up the states

    $stateProvider
      .state('index', {
        url: '/',
        views: {
          'home': {
            'templateUrl': 'js/app/project_n6/templates/home.html',
            'controller': 'home-controller'
          }
        }
      })

      .state('404', {
        url: '/error/not-found',
        views: {
          '404': {
            'templateUrl': 'js/app/project_n6/templates/404.html'
          }
        }
      });

  });
