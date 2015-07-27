'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope){
    $rootScope.$on('$locationChangeSuccess', function(event, newURL/*, oldURL*/) {
      //console.log(newURL, oldURL);
      $('.nav.navbar-nav li').removeClass('active');
      $('.nav.navbar-nav li a').each(function(i, $elem) {
        if ($elem.href === newURL) {
          var $this = $(this);
          $this.parent().addClass('active');
          document.title = 'Ethan Bell - '+$this.text();
        }
      });
    });
  })
  .config(function ($routeProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|skype|data):/); //allow usage of ftp, mailto, chrome-extension, etc, if I ever need them.
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/demos', {
        templateUrl: '../views/demos.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
