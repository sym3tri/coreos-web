/**
 * @fileoverview
 * Display a cog icon and construct dropdown menu.
 */

'use strict';

angular.module('coreos.ui')
.directive('coCog', function() {

  return {
    templateUrl: '/coreos.ui/cog/cog.html',
    restrict: 'E',
    replace: true,
    scope: {
      'apps': '=',
      'options': '=',
      'size': '@',
      'anchor': '@'
    },
    link: function(scope, elem) {
      scope.clickHandler = function($event, option) {
        $event.stopPropagation();
        $event.preventDefault();
        if (option.callback) {
          option.callback();
        }
        elem.removeClass('open');
      };
    }
  };

});
