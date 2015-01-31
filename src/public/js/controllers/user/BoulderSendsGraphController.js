/*jslint nomen: true */
/*global angular: false, btoa: false, console: false, alert: false, Chart: false, confirm: false, jsPDF: false, naturalSort: false */

angular.module('SETTER')
    .controller('BoulderSendsGraphController', [
        '$scope',
        'UsersService',
        'BarGraphHelperService',
        function (
            $scope,
            UsersService,
            BarGraphHelperService
        ) {
            'use strict';

            $scope.options = {
                scaleFontColor: "#000",
                scaleFontSize: 20,
                animation: false
            };

            UsersService.getBoulderSends($scope.userId)
                .success(function (pData) {
                    var data;
                    data = BarGraphHelperService.generateRouteCountGraphData(pData);
                    $scope.boulderSendsBarGraph = {
                        labels: data.labels,
                        data: data.data,
                        hasData: data.data[0].length > 0
                    };
                });
        }]);