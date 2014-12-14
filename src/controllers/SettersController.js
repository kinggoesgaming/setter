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

var theSettersDao = require('../dao/SettersDao');
var theControllerHelper = require('./ControllerHelper');

var SettersController = function () {
    'use strict';

    this.getSettersAtGym = function (pReq, pRes) {
        var gymId,
            callback;
        gymId = pReq.params.gymId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theSettersDao.getSettersAtGym(gymId, callback);
    };

    this.getSetters = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theSettersDao.getSetters(callback);
    };

    this.createSetterGymAccess = function (pReq, pRes) {
        var callback,
            gymId,
            setterId;
        gymId = pReq.user.accountId;
        setterId = pReq.body.setterId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theSettersDao.createSetterGymAccess(setterId, gymId, callback);
    };
};

module.exports = new SettersController();
