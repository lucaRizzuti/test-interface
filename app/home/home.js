angular.module( 'myApp.home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller( 'HomeCtrl', function LoginController($scope) {
        $scope.username = '';
        $scope.password = '';
        $scope.success = false;
        $scope.auth = function() {
            $scope.output = "calling";
            $scope.github = new Github({
                username: $scope.username,
                password: $scope.password,
                auth: "basic"
            });
            $scope.user = $scope.github.getUser();
            $scope.user.repos(function(err, repos) {
                if(err != null)
                {
                    var output = JSON.parse(err.request.response);
                    $scope.output = output.message;
                }else
                {
                    var output = repos;
                    $scope.output = "success";
                    $scope.response = repos
                    $scope.success = true;
                }
                $scope.$apply();
            });
        };
    });