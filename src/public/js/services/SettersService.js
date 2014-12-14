/*jslint nomen: true */
/*global angular: false */

angular.module('SETTER')
    .factory('SettersService', ['$http', function ($http) {
        'use strict';
        return {
            getSettersAtGym: function (pGymId) {
                return $http({
                    method: 'GET',
                    url: 'api/gym/' + pGymId + '/setters'
                });
            }
        };
    }]);
