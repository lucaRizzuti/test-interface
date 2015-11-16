'use strict';

(function () {

    angular

        .module('services', [])
        .factory('dataServiceUtil', dataService);

    dataService.$inject = [
        '$http',
        '$log'
    ];

    function dataService($http, $log) {

        return {
            getData : getData,
            login: login
        };

        function getData () {
            try{
                return $http({
                    url: 'https://api.github.com/lucaRizzuti/test-interface',
                    method: "POST"
                })
                    .then(success)
                    .error(error)
            } catch (e) {
                alert("you have to be logged " + e);
                $log.error("*** some error ***");
            }
        }

        function success(response) {
            alert("success " + response);
            return response;
        }

        function login (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            //$timeout(function(){
            //    var response = { success: username === 'test' && password === 'test' };
            //    if(!response.success) {
            //        response.message = 'Username or password is incorrect';
            //    }
            //    callback(response);
            //}, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            $http.post('/api/authenticate', { username: username, password: password })
                .success(function (response) {
                    callback(response);
                });

        }
    }

})();
