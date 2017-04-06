angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService, HistoryService, postSearchService, FavouritesService) {

        $scope.seeContent = function(idx) {
            $scope.selectedIndex = idx;
        };

        $scope.delete = function(index) {
            $scope.history.splice(index, 1);
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

        // $scope.favourite = [];
        // FavouritesService.getAll().then(function(res) {
        //     $scope.favourite = res.data;
        //
        //       console.log("before", $scope.favourite);

      // for(var i = 0; i < favourite.length; i++) {
      //  if(map[favourite[i]] !== null) {
      //     map[favourite[i]] += 1;
      // } else {
      //     map[favourite[i]] = 1;
      //     }
          // console.log("after", $scope.favourite);
      // }
    //     });
    //
  });
