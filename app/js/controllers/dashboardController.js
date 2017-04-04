angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService, HistoryService) {

        $scope.hideVisuals = true;

        $scope.seeContent = function() {
          $scope.hideVisuals = false;
        };


        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        $scope.history = [];
        HistoryService.getAll().then(function (res){
          $scope.history = res.data;
        },
function(err){
  console.log("marche pas!");
}
      );
    });
