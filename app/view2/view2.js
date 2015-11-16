'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])


.controller('View2Ctrl', fnCtrl);

//dependecy injection
fnCtrl.$inject = [
  '$scope',
  '$log',
  'dataServiceUtil'
];

function fnCtrl($scope, $log, dataServiceUtil) {

  dataServiceUtil.getData();


  //$ curl 'https://api.github.com/user/repos?page=2&per_page=100'

  //$http.post('/api/authenticate', { username: username, password: password })
  //    .success(function (response) {
  //      callback(response);
  //    });
}