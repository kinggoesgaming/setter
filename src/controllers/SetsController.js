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

var theSetsDao = require('../dao/SetsDao');
var theControllerHelper = require('./ControllerHelper');

var SetsController = function () {
    'use strict';

    this.getSetsOnWall = function (pReq, pRes) {
        var wallId,
            callback;
        wallId = pReq.params.wallId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theSetsDao.getSetsOnWall(wallId, callback);
    };

    this.getSet = function (pReq, pRes) {
        var setId,
            callback;
        setId = pReq.params.setId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theSetsDao.getSet(setId, callback);
    };

    this.createSet = function (pReq, pRes) {
        var wallId,
            callback;
        wallId = pReq.params.wallId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theSetsDao.createSet(wallId, callback);
    };

    this.deleteSet = function (pReq, pRes) {
        var setId,
            callback;
        setId = pReq.params.setId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theSetsDao.deleteSet(setId, callback);
    };
};

module.exports = new SetsController();
