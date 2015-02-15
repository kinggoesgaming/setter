/*jslint nomen: true */
/*global angular: false, btoa: false, console: false, alert: false, Chart: false, confirm: false, jsPDF: false, $: false */

angular.module('SETTER')
    .controller('BoulderRoutesGraphController', [
        '$scope',
        '$routeParams',
        'RoutesService',
        'BarGraphHelperService',
        function (
            $scope,
            $routeParams,
            RoutesService,
            BarGraphHelperService
        ) {
            'use strict';

            $scope.gymId = parseInt($routeParams.gymId, 10);
            $scope.hasBoulder = false;

            RoutesService.getCurrentBoulderRoutes($scope.gymId, function (pData) {
                $scope.hasBoulder = pData.length > 0;
                $scope.graph = BarGraphHelperService.generateRouteCountGraphData(pData);
            });

            $scope.export = function () {
                var canvas,
                    image,
                    doc,
                    JsPDF = jsPDF;

                canvas = $('#boulderGraph').get(0);
                image = new Image();
                image.src = canvas.toDataURL("image/png");
                doc = new JsPDF();
                doc.text(20, 20, 'Current Bouldering Routes');
                doc.addImage(image, 15, 40, 180, 160);
                doc.save('BoulderRoutesGraph.pdf');
            };
        }]);
