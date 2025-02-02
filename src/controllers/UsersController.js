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

var theUsersDao = require('../dao/UsersDao');
var theRoutesDao = require('../dao/RoutesDao');
var theProgressionsDao = require('../dao/ProgressionsDao');
var theAlertsDao = require('../dao/AlertsDao');
var theControllerHelper = require('./ControllerHelper');

var UsersController = function () {
    'use strict';

    this.getUser = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getUser(userId, callback);
    };

    this.getUserImage = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getUserImage(userId, callback);
    };

    this.getUsers = function (pReq, pRes) {
        var callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getUsers(callback);
    };

    this.getAlertsForUser = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.user.accountId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theAlertsDao.getAlertsForUser(userId, callback);
    }

    this.getUserSendDistributions = function (pReq, pRes) {
        var userId,
            type,
            callback;
        userId = pReq.params.userId;
        type = pReq.params.type;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getUserSendDistributions(userId, type, callback);
    };

    this.getProgressions = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theProgressionsDao.getProgressions(userId, callback);
    };

    this.getBoulderSends = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getBoulderSends(userId, callback);
    };

    this.getTopRopeSends = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getTopRopeSends(userId, callback);
    };

    this.getLeadSends = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getLeadSends(userId, callback);
    };


    this.setHomeGym = function (pReq, pRes) {
        var gymId,
            userId,
            callback;
        gymId = pReq.body.gymId;
        userId = pReq.user.accountId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.setHomeGym(userId, gymId, callback);
    };

    this.getActivityStream = function (pReq, pRes) {
        var userId,
            callback;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getActivityStream(userId, callback);
    };
};

module.exports = new UsersController();
