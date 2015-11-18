'use strict';
(function () {
    angular.module('myApp.home')
        .directive('myAppRepository', constr);

    function constr() {

        var directive = {
            restrict: "E",
            templateUrl: "components/directives/repository.directive.html",
            scope: {
                item : "="
            },
            controller: controller,
            controllerAs: 'repos',
            bindToController: true
        };

        return directive;
    }

    controller.$inject = [
        '$log'
    ];

    function controller($log) {

    }
})();