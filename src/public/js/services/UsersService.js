/*jslint nomen: true */
/*global angular: false */

angular.module('SETTER')
    .factory('UsersService', ['$http', function ($http) {
        'use strict';

        var user = {},
            image = {},
            projects = [];

        return {
            setImageAsDirty: function (pUserId) {
                delete image[pUserId];
            },

            registerUser: function (pRegistrationInfo) {
                return $http({
                    method: "POST",
                    url: "api/register/user",
                    data: pRegistrationInfo
                });
            },
            getUser: function (pUserId, pCallback) {
                if (user[pUserId]) {
                    pCallback(user[pUserId]);
                    return;
                }

                $http({
                    method: 'GET',
                    url: "api/users/" + pUserId
                }).success(function (pData) {
                    user[pUserId] = pData;
                    pCallback(user[pUserId]);
                });
            },
            getUserImage: function (pUserId, pCallback) {
                if (image[pUserId]) {
                    pCallback(image[pUserId]);
                    return;
                }

                $http({
                    method: 'GET',
                    url: "api/users/" + pUserId + "/image"
                }).success(function (pData) {
                    image[pUserId] = pData;
                    pCallback(image[pUserId]);
                });
            },


            getUserSendDistributions:  function (pUserId, pType) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId + "/sends/" + pType
                });
            },


            getBoulderSends: function (pUserId) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId + "/sends/boulder"
                });
            },
            getTopRopeSends: function (pUserId) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId + "/sends/toprope"
                });
            },
            getLeadSends: function (pUserId) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId + "/sends/lead"
                });
            },



            setHomeGym: function (pGymId) {
                return $http({
                    method: "POST",
                    url: "api/users/homegym/set",
                    data: {
                        gymId: pGymId
                    }
                });
            },
            getActivityStream: function (pUserId) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId + "/activity"
                });
            },
            getProjects: function (pUserId) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId + "/projects"
                });
            },
            getProgressions:  function (pUserId) {
                return $http({
                    method: "GET",
                    url: "api/users/" + pUserId + "/progressions"
                });
            },
            getAlerts: function () {
                return $http({
                    method: 'GET',
                    url: 'api/users/alerts'
                });
            }
        };
    }]);
