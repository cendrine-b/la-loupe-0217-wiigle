angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService, HistoryService, postSearchService) {

        $scope.seeContent = function(idx) {
          $scope.selectedIndex = idx;
        };


        $scope.delete = function (id, index) {
          $scope.history.splice(index, 1);
        };



        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.history = [];
        HistoryService.getAll().then(function (res){
          $scope.history = res.data;
        },

        // DELETE SEARCH FROM DATABASE
        // postSearchService.delete().then(function (res){
        //   $scope.history = res.data;
        // },

function(err){
  console.log("marche pas!");
}

    );
    });
