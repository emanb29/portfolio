'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.clients = {
      intel: {
        url: '//intel.com/',
        img: 'images/intel.png'
      },
      languageTwin: {
        url: '//languagetwin.com/',
        img: 'images/languagetwin.png'
      },
      loneFir: {
        img: 'images/flfc.png',
        url: '//friendsoflonefircemetery.org/'
      },
      intoItPR: {
        url: '//intoitpr.com',
        img: 'images/intoitpr.png'
      },
      gelatoGal: {
        img: 'images/gelatogal.jpg'
      }
    };


  });
