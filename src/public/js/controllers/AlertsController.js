/*jslint nomen: true */
/*global angular: false, btoa: false, console: false, confirm: false, moment: false */

angular.module('SETTER')
    .controller('AlertsController', [
        '$scope',
        '$routeParams',
        '$window',
        'AlertsService',
        'LoginService',
        function (
            $scope,
            $routeParams,
            $window,
            AlertsService,
            LoginService
        ) {
            'use strict';

            if (!LoginService.validateLoggedIn()) {
                return;
            }

            $scope.gymId = parseInt($routeParams.gymId, 10);
            $scope.form = {};

            AlertsService.getAlertsForGym($scope.gymId)
                .success(function (pData) {
                    $scope.alerts = pData;
                });

            $scope.delete = function (pAlert) {
                var yes = $window.confirm("Are you sure you want to delete this alert?");
                if (!yes) {
                    return;
                }

                AlertsService.deleteAlert($scope.gymId, pAlert.id)
                    .success(function () {
                        $scope.alerts.splice($scope.alerts.indexOf(pAlert), 1);
                    });
            };

            $scope.postAlert = function () {
                AlertsService.createAlert($scope.gymId, $scope.form.message)
                    .success(function (pData) {
                        var alert = {
                            id: pData.id,
                            message: $scope.form.message,
                            date: moment()
                        };

                        $scope.alerts.unshift(alert);

                        $scope.form.message = '';
                    });
            };

        }]);
