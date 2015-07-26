'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.socialLinks = {
      github: {
        icon: 'fa-github',
        url: '//github.com/emanb29'
      },
      facebook: {
        icon: 'fa-facebook-square',
        url: '//www.facebook.com/emanb29'
      },
      twitter: {
        icon: 'fa-twitter',
        url: '//twitter.com/emanb29'
      }
    };
  });
