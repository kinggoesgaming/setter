/*jslint nomen: true */
/*jslint unparam: true*/
/*global angular: false, btoa: false, console: false, moment: false, alert: false, confirm: false */

angular.module('SETTER')
    .controller('CreateRouteController', [
        '$scope',
        '$rootScope',
        '$routeParams',
        '$q',
        '$timeout',
        'GradesService',
        'RoutesService',
        'ColorsService',
        'SettersService',
        'LoginService',
        'SelectedRouteService',
        'WallsService',
        'MessageService',
        function (
            $scope,
            $rootScope,
            $routeParams,
            $q,
            $timeout,
            GradesService,
            RoutesService,
            ColorsService,
            SettersService,
            LoginService,
            SelectedRouteService,
            WallsService,
            MessageService
        ) {
            'use strict';

            var getBoulderGradesPromise,
                getRopeGradesPromise,
                getColorsPromise,
                getSettersPromise,
                findEntry,
                BOULDER_TYPE = 0,
                TOPROPE_TYPE = 1,
                LEAD_TYPE = 2,
                cleanGrades,
                loadRouteData,
                init;

            $scope.gymId = $rootScope.gymId;

            $scope.$watch(function () {
                return SelectedRouteService.getSelectedRoute();
            }, function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    $scope.routeId = newValue.id;
                    $scope.gymId = newValue.gym_id;
                    $scope.wallId = newValue.wall_id;
                    $scope.loading = true;
                    loadRouteData();
                }
            });

            $scope.$watch(function () {
                return $rootScope.routeModalViewType;
            }, function (newValue, oldValue) {
                $scope.isEditMode = false;
                if (newValue === 'edit') {
                    $scope.isEditMode = true;
                } else if (newValue === 'create') {
                    $scope.gymId = $rootScope.gymId;
                    init();
                    cleanGrades();
                }
            });

            $scope.$watch(function () {
                return $scope.gymId;
            }, function (newValue, oldValue) {
                if (newValue) {
                  $scope.gymId = newValue;
                  init();
                }
            });

            MessageService.listen('gymId', 'CreateRouteController', function (pData) {
                $scope.gymId = pData;
                  init();
            });

            $scope.$watch(function () {
                return $rootScope.wallId;
            }, function (newValue, oldValue) {
                if (newValue && $scope.zones) {
                  $scope.wallId = newValue;
                  init();
                }
            });

            $scope.form = {};
            $scope.setters = [];

            $scope.types = [
                {
                    id: BOULDER_TYPE,
                    name: 'Boulder'
                },
                {
                    id: TOPROPE_TYPE,
                    name: 'Top Rope'
                },
                {
                    id: LEAD_TYPE,
                    name: 'Lead'
                }
            ];


            $scope.form.type = $scope.types[BOULDER_TYPE];

            /*
                Resets unselected dropdown backend-values back to default
            */
            cleanGrades = function () {
                if ($scope.form.type.name === 'Boulder') {
                    $scope.form.topRopeGrade = $scope.ropeGrades[0];
                    $scope.form.leadGrade = $scope.ropeGrades[0];
                } else if ($scope.form.type.name === 'Top Rope') {
                    $scope.form.boulderGrade = $scope.boulderGrades[0];
                    $scope.form.leadGrade = $scope.ropeGrades[0];
                } else if ($scope.form.type.name === 'Lead') {
                    $scope.form.boulderGrade = $scope.boulderGrades[0];
                    $scope.form.topRopeGrade = $scope.ropeGrades[0];
                }
            };

            $scope.cancelClicked = function () {
                $rootScope.routeModalViewType = 'view';
            };

            $scope.addClicked = function () {
                var name = $scope.form.name,
                    zone = $scope.form.zone.id,
                    type = $scope.form.type.id,
                    boulderGradeId = $scope.form.boulderGrade.id,
                    topRopeGradeId = $scope.form.topRopeGrade.id,
                    leadGradeId = $scope.form.leadGrade.id,
                    colorId = $scope.selectedColorId,
                    setterId = $scope.form.setter.account_id,
                    note = $scope.form.note;

                cleanGrades();

                RoutesService.createRoute(
                    $scope.gymId,
                    zone,
                    name,
                    colorId,
                    type,
                    boulderGradeId,
                    topRopeGradeId,
                    leadGradeId,
                    setterId,
                    note
                )
                    .success(function (pData) {
                        $scope.form.boulderGrade = $scope.boulderGrades[0];
                        $scope.form.topRopeGrade = $scope.ropeGrades[0];
                        $scope.form.leadGrade = $scope.ropeGrades[0];
                        $scope.form.color = $scope.colors[0].id;
                        $scope.form.note = "";
                        $scope.form.name = "";

                        angular.element(".created-modal").foundation('reveal', 'open', {animation: 'fade'});
                        $timeout(function () {
                          angular.element(".created-modal").foundation('reveal', 'close', {animation: 'fade'});
                        }, 1000);

                        $rootScope.closeRouteModal();
                        $rootScope.refreshWall = true;
                        WallsService.setWallsDirty($scope.gymId);
                    });
            };

            $scope.saveClicked = function () {
                var name = $scope.form.name,
                    zone = $scope.form.zone.id,
                    type = $scope.form.type.id,
                    boulderGradeId = $scope.form.boulderGrade.id,
                    topRopeGradeId = $scope.form.topRopeGrade.id,
                    leadGradeId = $scope.form.leadGrade.id,
                    colorId = $scope.selectedColorId,
                    setterId = $scope.form.setter.account_id,
                    note = $scope.form.note;

                cleanGrades();

                RoutesService.updateRoute(
                    $scope.gymId,
                    zone,
                    $scope.routeId,
                    name,
                    colorId,
                    type,
                    boulderGradeId,
                    topRopeGradeId,
                    leadGradeId,
                    setterId,
                    note
                )
                    .success(function (pData) {
                        $rootScope.closeRouteModal();
                        $rootScope.refreshWall = true;
                    });
            };

            $scope.hasSetters = function () {
                return $scope.setters.length > 0;
            };

            $scope.colorChanged = function () {
                var i;
                for (i = 0; i < $scope.colors.length; i += 1) {
                    if ($scope.colors[i].id === parseInt($scope.form.color, 10)) {
                        $scope.text_color = $scope.colors[i].value;
                        break;
                    }
                }
            };

            $scope.selectColor = function(color) {
                $scope.selectedColorId = color;
            };

            init = function () {
                getBoulderGradesPromise = GradesService.getBoulderGrades()
                    .success(function (pData) {
                        $scope.boulderGrades = pData;
                        $scope.form.boulderGrade = pData[0];
                    });

                getRopeGradesPromise = GradesService.getRopeGrades()
                    .success(function (pData) {
                        $scope.ropeGrades = pData;
                        $scope.form.topRopeGrade = pData[0];
                        $scope.form.leadGrade = pData[0];
                    });

                getColorsPromise = ColorsService.getColors()
                    .success(function (pData) {
                        $scope.colors = pData;
                        $scope.selectedColorId = pData[0].id;
                        $scope.colorChanged();
                    });

                getSettersPromise = SettersService.getSettersAtGym($scope.gymId)
                    .success(function (pData) {
                        $scope.setters = pData;
                        $scope.form.setter = pData[0];
                    });

                var getZonesPromise = WallsService.getWallsInGym($scope.gymId, function (pData) {
                    $scope.zones = pData;
                    $scope.form.zone = pData[0];

                    if ($scope.wallId) {
                      $scope.form.zone = findEntry($scope.wallId, $scope.zones);
                    }
                });

                $q.all([
                  getBoulderGradesPromise,
                  getRopeGradesPromise,
                  getColorsPromise,
                  getSettersPromise,
                  getZonesPromise
                ], function () {
                    loadRouteData();
                });
            };

            loadRouteData = function () {
                if (!$scope.routeId) {
                    return;
                }
                RoutesService.getRoute($scope.routeId)
                    .success(function (pData) {
                        $scope.form.type = findEntry(pData.type, $scope.types);
                        $scope.form.zone = findEntry(pData.wall_id, $scope.zones);
                        $scope.form.boulderGrade = findEntry(pData.boulder_grade_id, $scope.boulderGrades);
                        $scope.form.topRopeGrade = findEntry(pData.toprope_grade_id, $scope.ropeGrades);
                        $scope.form.leadGrade = findEntry(pData.lead_grade_id, $scope.ropeGrades);
                        $scope.form.color = findEntry(pData.color_id, $scope.colors).id;
                        $scope.form.setter = findEntry(pData.setter_id, $scope.setters);
                        $scope.form.note = pData.note;
                        $scope.form.name = pData.route_name;
                        $scope.selectedColorId = $scope.form.color;
                        $scope.colorChanged();
                        $scope.loading = false;
                    });
            };

            findEntry = function (pLookingFor, pArray) {
                var i,
                    entry;
                for (i = 0; i < pArray.length; i += 1) {
                    entry = pArray[i];

                    if (entry.id === pLookingFor || entry.account_id === pLookingFor) {
                        return entry;
                    }
                }
                return pArray[0];
            };

        }]);
