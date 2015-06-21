'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.skills = [
      {
        name: 'JavaScript',
        percent: 95,
        color: 'light-blue'
      },
      {
        name: 'jQuery',
        percent: 85,
        color: 'cyan'
      },
      {
        name: 'node.js',
        percent: 70,
        color: 'teal'
      },
      {
        name: 'AngularJS',
        percent: 80,
        color: 'green'
      },
      {
        name: 'ExpressJS',
        percent: 75,
        color: 'light-green'
      },
      {
        name: 'ECMAScript 6',
        percent: 90,
        color: 'lime'
      },
      {
        name: 'Chrome',
        percent: 95,
        color: 'yellow'
      },
      {
        name: 'MongoDB',
        percent: 80,
        color: 'amber'
      },
      {
        name: 'SQL/MySQL',
        percent: 86,
        color: 'orange'
      },
      {
        name: 'PHP',
        percent: 85,
        color: 'deep-orange'
      },
      {
        name: 'Laravel',
        percent: 80,
        color: 'red'
      },
      {
        name: 'MVC/MVVM',
        percent: 90,
        color: 'pink'
      },
      {
        name: 'OOP',
        percent: 95,
        color: 'purple'
      },
      {
        name: 'Git',
        percent: 85,
        color: 'deep-purple'
      },
      {
        name: 'Cordova/XDK',
        percent: 90,
        color: 'indigo'
      }
    ];
  });
