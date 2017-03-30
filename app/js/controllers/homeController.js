angular.module('app')
    .controller('homeController', function($scope, $stateParams, $state) {
        /* Here is your main controller */
        $scope.query = "";

        $scope.goSearch = function() {

            // window.location = "#!/resultat";

            $state.go('anon.resultat', {query: $scope.query});



            console.log($scope.query);





        };
    });
