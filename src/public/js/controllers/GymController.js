/*jslint nomen: true */
/*global angular: false, btoa: false, console: false */

angular.module('SETTER')
    .controller('GymController', ['$scope', 'GymsService', '$routeParams', function ($scope, GymsService, $routeParams) {
        'use strict';

        var gymId = $routeParams.gymId;

        $scope.gym = {};

        GymsService.getGym(gymId)
            .success(function (pData) {
                $scope.gym = pData;
            });
    }]);