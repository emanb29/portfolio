'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:galleryStandardize
 * @description
 * # galleryStandardize
 */
angular.module('portfolioApp')
  .directive('galleryStandardize', function ($interval) {
    return {
      restrict: 'A',
      link: function standardizeGallery($scope, gallery, attrs) {
        //console.log('starting standardizeGallery');
        var bigHeightOld = 0;
        $interval(function () {
          var bigHeight = 0;
          var $thumbnails = gallery.find('.thumbnail');
          //console.log($thumbnails);
          $thumbnails.each(function (i, elem) { //find each gallery image's current size
            var height = $(elem).height();
            if (height > bigHeight) bigHeight = height;
          });
          if (bigHeight === bigHeightOld) return false; //cut it short if unnecessary. Saves some CPU and rendering cycles
          $thumbnails.each(function (i, elem) {
            var height = $(elem).height();
            if (height < bigHeight) {
              var desiredPadding = (bigHeight - height) / 2 + 4; //+4 accommodates for thumbnail style
              $(elem).css({
                'padding-top': desiredPadding,
                'padding-bottom': desiredPadding
              });
            }
          });
        }, 40);//delay adjustment until post-render, keep active
      }
    }
  });
