/*jslint nomen: true */

/*
Copyright (c) Cody Seibert and Guillermo Martinez

Do not copy, redistribute, sell, modify, etc, without
written legally bound permission from both Cody Seibert and
Guillermo Martinez.
*/

var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('./DaoHelper');

var SettersDao = function () {
    'use strict';

    this.getSettersAtGym = function (pGymId, pCallback) {
        theDaoHelper.executeQuery(
            'SELECT a.id, a.firstname, a.lastname FROM setters_gyms_access sga ' +
                'INNER JOIN accounts a ON a.id = sga.setter_id WHERE sga.gym_id = ?',
            [pGymId],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

};

module.exports = new SettersDao();
