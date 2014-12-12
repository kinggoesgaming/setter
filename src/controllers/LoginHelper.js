/*jslint unparam: true, nomen: true*/

/*
*   Copyright (c) Cody Seibert and Guillermo Martinez
*
*   Do not copy, redistribute, sell, modify, etc, without
*   written legally bound permission from both Cody Seibert and
*   Guillermo Martinez.
*/

// REQUIRES
var randomstring = require('just.randomstring');
var theAccountsDao = require('../dao/AccountsDao');
var theMessages = require('../Messages');

/**
*   Logic for all account requests
*
*   @Author Cody Seibert
*   @Date 12/7/2014
*/
var LoginHelper = function () {
    'use strict';
    this.generateAndSendToken = function (pAccountId, pRes) {
        var token = randomstring(20);

        theAccountsDao.setToken(pAccountId, token, function (pResults) {
            if (pResults.error) {
                pRes.status(400);
                pRes.send(theMessages.ERROR);
                return;
            }

            theAccountsDao.getAccountType(pAccountId, function (pResults) {
                if (pResults.error) {
                    pRes.status(400);
                    pRes.send(theMessages.ERROR);
                    return;
                }

                pRes.send({token: token, type_id: pResults.type_id});
            });

        });
    };
};

module.exports = new LoginHelper();