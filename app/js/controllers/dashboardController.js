angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService, HistoryService, postSearchService, FavouritesService, DeleteSearchService) {

        $scope.seeContent = function(idx) {
            $scope.selectedIndex = idx;
        };

        $scope.numLimit = 5;

        $scope.delete = function (id) {
          DeleteSearchService.delete(id).then(function(res) {
            location.reload(true);
          });
        };

        $scope.deleteAll = function () {
          DeleteSearchService.deleteAll().then(function(res) {
            location.reload(true);
          });
        };


        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });

        $scope.history = [];
        HistoryService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.history = res.data;
            $scope.favourites = getFav(res.data);
            console.log($scope.favourites);
            }, function(err) {
                console.log("marche pas!");
            }
        );

        var getFav = function (searches) {
          var favs = [];
          var contents = searches.map(function (search) {
            return search.content;
          });
          console.log(contents);
          contents.forEach(function (content) {
            var match = false;
            favs.forEach(function (fav) {
              if(content === fav.content) {
                fav.count++;
                match = true;
              }
            });
            if(!match) {
              favs.push({content: content, count: 1});
            }
          });
          return favs;
        };

  });
