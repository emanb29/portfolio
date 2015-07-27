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
      linkedin: {
        icon: 'fa-linkedin',
        url: '//linkedin.com/profile/view?id=230928344'
      },
      email: {
        icon: 'fa-envelope',
        url: 'mailto:eb@ethanbell.me?Subject=Inquiry%20from%20profile%20website'
      },
      skype: {
        icon: 'fa-skype',
        url: 'skype:emanb29?chat'
      },
      facebook: {
        icon: 'fa-facebook-square',
        url: '//www.facebook.com/emanb29'
      },
      twitter: {
        icon: 'fa-twitter',
        url: '//twitter.com/emanb29'
      },
      paypal: {
        icon: 'fa-paypal',
        url: '//www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JCQSTAJCVCBN8'
      }
    };
  });
