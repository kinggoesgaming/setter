/*jslint nomen: true */
/*jslint unparam: true*/

/*jslint unparam: true, nomen: true*/

/*
*   Copyright (c) Cody Seibert and Guillermo Martinez
*
*   Do not copy, redistribute, sell, modify, etc, without
*   written legally bound permission from both Cody Seibert and
*   Guillermo Martinez.
*/

var theRoutesDao = require('../dao/RoutesDao');
var theWallsDao = require('../dao/WallsDao');
var theRouteNewToUserDao = require('../dao/RouteNewToUserDao');
var theControllerHelper = require('./ControllerHelper');

var RoutesController = function () {
    'use strict';

    this.getRoute = function (pReq, pRes) {
        var routeId,
            callback;
        routeId = pReq.params.routeId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.getRoute(routeId, callback);
    };

    this.getRoutesInGym = function (pReq, pRes) {
        var gymId,
            callback;
        gymId = pReq.params.gymId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.getRoutesInGym(gymId, callback);
    };

    this.getRoutesInGym2 = function (pReq, pRes) {
        var gymId,
            accountId,
            callback;
        accountId = pReq.user.accountId;
        gymId = pReq.params.gymId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.getRoutesInGym2(accountId, gymId, callback);
    };

    this.getRoutesOnWall = function (pReq, pRes) {
        var wallId,
            accountId,
            callback;
        accountId = pReq.user.accountId;
        wallId = pReq.params.wallId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.getRoutesOnWall(accountId, wallId, callback);
    };

    this.createRoute = function (pReq, pRes) {
        var gymId,
            wallId,
            name,
            type,
            boulderGradeId,
            topRopeGradeId,
            leadGradeId,
            setterId,
            colorId,
            callback,
            note;
        gymId = pReq.params.gymId;
        wallId = pReq.params.wallId;
        name = pReq.body.name || '';
        colorId = pReq.body.colorId;
        type = pReq.body.type;
        boulderGradeId = pReq.body.boulderGradeId;
        topRopeGradeId = pReq.body.topRopeGradeId;
        leadGradeId = pReq.body.leadGradeId;
        setterId = pReq.body.setterId;
        note = pReq.body.note || '';

        if (type === 0) {
            topRopeGradeId = null;
            leadGradeId = null;
        }

        if (type === 1) {
            boulderGradeId = null;
            leadGradeId = null;
        }

        if (type === 2) {
            topRopeGradeId = null;
            boulderGradeId = null;
        }

        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.createRoute(wallId,
            name,
            setterId,
            type,
            boulderGradeId,
            topRopeGradeId,
            leadGradeId,
            colorId,
            note,
            function (pRoute) {
                theRouteNewToUserDao.createNewRouteToUserAlertsForGym(gymId, wallId, pRoute.id, function (pData) {
                    callback(pRoute);
                });
            });

        theWallsDao.updateLastUpdate(wallId, function () {
            return undefined;
        });
    };

    this.updateRoute = function (pReq, pRes) {
        var routeId,
            name,
            type,
            boulderGradeId,
            topRopeGradeId,
            leadGradeId,
            setterId,
            colorId,
            callback,
            note;
        routeId = pReq.params.routeId;
        name = pReq.body.name || '';
        colorId = pReq.body.colorId;
        type = pReq.body.type;
        boulderGradeId = pReq.body.boulderGradeId;
        topRopeGradeId = pReq.body.topRopeGradeId;
        leadGradeId = pReq.body.leadGradeId;
        setterId = pReq.body.setterId;
        note = pReq.body.note || '';

        if (type === 0) {
            topRopeGradeId = null;
            leadGradeId = null;
        }

        if (type === 1) {
            boulderGradeId = null;
            leadGradeId = null;
        }

        if (type === 2) {
            topRopeGradeId = null;
            boulderGradeId = null;
        }

        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.updateRoute(
            routeId,
            name,
            setterId,
            type,
            boulderGradeId,
            topRopeGradeId,
            leadGradeId,
            colorId,
            note,
            callback
        );
    };

    this.deleteRoute = function (pReq, pRes) {
        var routeId,
            callback;
        routeId = pReq.params.routeId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.deleteRoute(routeId, callback);
    };

    this.stripRoute = function (pReq, pRes) {
        var routeId,
            callback;
        routeId = pReq.params.routeId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theRoutesDao.stripRoute(routeId, callback);
    };

    this.deleteNewRouteToUserAlert = function (pReq, pRes) {
        var routeId,
            accountId,
            callback;
        routeId = pReq.params.routeId;
        accountId = pReq.user.accountId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theRouteNewToUserDao.deleteNewRouteToUserAlert(routeId, accountId, callback);
    };
};

module.exports = new RoutesController();
