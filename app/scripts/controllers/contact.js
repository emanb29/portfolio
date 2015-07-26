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
      facebook: {
        icon: 'fa-facebook-square',
        url: 'https://www.facebook.com/emanb29'
      },
      twitter: {
        icon: 'fa-twitter',
        url: 'http://twitter.com/emanb29'
      }
    }
  });
