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
        percent: 85,
        color: 'light-blue'
      },
      {
        name: 'jQuery',
        percent: 75,
        color: 'cyan'
      },
      {
        name: 'node.js',
        percent: 60,
        color: 'teal'
      },
      {
        name: 'AngularJS',
        percent: 70,
        color: 'green'
      },
      {
        name: 'ExpressJS',
        percent: 65,
        color: 'light-green'
      },
      {
        name: 'ECMAScript 6',
        percent: 80,
        color: 'lime'
      },
      {
        name: 'Chrome',
        percent: 85,
        color: 'yellow'
      },
      {
        name: 'MongoDB',
        percent: 70,
        color: 'amber'
      },
      {
        name: 'SQL/MySQL',
        percent: 76,
        color: 'orange'
      },
      {
        name: 'PHP',
        percent: 75,
        color: 'deep-orange'
      },
      {
        name: 'Laravel',
        percent: 70,
        color: 'red'
      },
      {
        name: 'MVC/MVVM',
        percent: 60,
        color: 'pink'
      },
      {
        name: 'OOP',
        percent: 85,
        color: 'purple'
      },
      {
        name: 'Git',
        percent: 75,
        color: 'deep-purple'
      },
      {
        name: 'Cordova/XDK',
        percent: 80,
        color: 'indigo'
      }
    ];
  });
