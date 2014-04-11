'use strict';

angular.module('coreos.ui')
.controller('ConfirmModalCtrl', function($scope, $modalInstance,
      executeFn, title, message, btnText, errorFormatter) {

  $scope.errorFormatter = errorFormatter;
  $scope.title = title;
  $scope.message = message;
  $scope.btnText = btnText || 'Confirm';

  $scope.execute = function() {
    $scope.requestPromise = executeFn(null, {
      supressNotifications: true
    })
    .then($modalInstance.close);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

});
