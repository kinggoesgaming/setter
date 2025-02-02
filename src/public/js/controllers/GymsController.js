/*jslint nomen: true */
/*global angular: false, btoa: false, console: false */

angular.module('SETTER')
    .controller('GymsController', [
        '$scope',
        'GymsService',
        'LoginService',
        function (
            $scope,
            GymsService,
            LoginService
        ) {
            'use strict';

            if (!LoginService.validateLoggedIn()) {
                return;
            }

            $scope.gyms = [];
            $scope.form = {
                search: ''
            };

            GymsService.getGyms(function (pData) {
                pData.map(function (pEntry) {
                    pEntry.show = true;
                    return pEntry;
                });

                $scope.gyms = pData;
            });

            $scope.applySearch = function () {
                var search = $scope.form.search;
                search = search.toUpperCase();

                $scope.gyms.map(function (pEntry) {
                    if ($scope.form.search === '' ||
                            pEntry.name.toUpperCase().indexOf(search) !== -1 ||
                            pEntry.address.toUpperCase().indexOf(search) !== -1) {
                        pEntry.show = true;
                    } else {
                        pEntry.show = false;
                    }
                    return pEntry;
                });
            };
        }]);
