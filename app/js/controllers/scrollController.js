angular.module('app')
  .controller('ScrollController', ['$scope', '$anchorScroll', function ($scope,  $anchorScroll) {
      $scope.scroll = function () {
        $anchorScroll();
      };
  }]);
