
var __cov_BTWRa_pzbywty9EK6LHspw = (Function('return this'))();
if (!__cov_BTWRa_pzbywty9EK6LHspw.__coverage__) { __cov_BTWRa_pzbywty9EK6LHspw.__coverage__ = {}; }
__cov_BTWRa_pzbywty9EK6LHspw = __cov_BTWRa_pzbywty9EK6LHspw.__coverage__;
if (!(__cov_BTWRa_pzbywty9EK6LHspw['src/dao/SendsDao.js'])) {
   __cov_BTWRa_pzbywty9EK6LHspw['src/dao/SendsDao.js'] = {"path":"src/dao/SendsDao.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":15,"loc":{"start":{"line":15,"column":15},"end":{"line":15,"column":27}}},"2":{"name":"(anonymous_2)","line":18,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":59}}},"3":{"name":"(anonymous_3)","line":27,"loc":{"start":{"line":27,"column":22},"end":{"line":27,"column":62}}},"4":{"name":"(anonymous_4)","line":35,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":62}}}},"statementMap":{"1":{"start":{"line":11,"column":0},"end":{"line":11,"column":39}},"2":{"start":{"line":12,"column":0},"end":{"line":12,"column":41}},"3":{"start":{"line":13,"column":0},"end":{"line":13,"column":42}},"4":{"start":{"line":15,"column":0},"end":{"line":42,"column":2}},"5":{"start":{"line":18,"column":4},"end":{"line":25,"column":6}},"6":{"start":{"line":19,"column":8},"end":{"line":24,"column":10}},"7":{"start":{"line":27,"column":4},"end":{"line":33,"column":6}},"8":{"start":{"line":28,"column":8},"end":{"line":32,"column":10}},"9":{"start":{"line":35,"column":4},"end":{"line":41,"column":6}},"10":{"start":{"line":36,"column":8},"end":{"line":40,"column":10}},"11":{"start":{"line":44,"column":0},"end":{"line":44,"column":32}}},"branchMap":{}};
}
__cov_BTWRa_pzbywty9EK6LHspw = __cov_BTWRa_pzbywty9EK6LHspw['src/dao/SendsDao.js'];
__cov_BTWRa_pzbywty9EK6LHspw.s['1']++;var theDB=require('../DBConnection');__cov_BTWRa_pzbywty9EK6LHspw.s['2']++;var theMessages=require('../Messages');__cov_BTWRa_pzbywty9EK6LHspw.s['3']++;var theDaoHelper=require('./DaoHelper');__cov_BTWRa_pzbywty9EK6LHspw.s['4']++;var SendsDao=function(){'use strict';__cov_BTWRa_pzbywty9EK6LHspw.f['1']++;__cov_BTWRa_pzbywty9EK6LHspw.s['5']++;this.getSendsForRoute=function(pRouteId,pCallback){__cov_BTWRa_pzbywty9EK6LHspw.f['2']++;__cov_BTWRa_pzbywty9EK6LHspw.s['6']++;theDaoHelper.executeQuery('SELECT u.id, u.firstname, u.lastname, s.route_id FROM sends s '+'INNER JOIN users u ON u.id = s.user_id WHERE s.route_id = ?',[pRouteId],pCallback);};__cov_BTWRa_pzbywty9EK6LHspw.s['7']++;this.createSend=function(pUserId,pRouteId,pCallback){__cov_BTWRa_pzbywty9EK6LHspw.f['3']++;__cov_BTWRa_pzbywty9EK6LHspw.s['8']++;theDaoHelper.executeQuery('INSERT INTO sends (user_id, route_id, date) VALUES (?, ?, NOW())',[pUserId,pRouteId],pCallback);};__cov_BTWRa_pzbywty9EK6LHspw.s['9']++;this.deleteSend=function(pUserId,pRouteId,pCallback){__cov_BTWRa_pzbywty9EK6LHspw.f['4']++;__cov_BTWRa_pzbywty9EK6LHspw.s['10']++;theDaoHelper.executeQuery('DELETE FROM sends WHERE user_id = ? AND route_id = ?',[pUserId,pRouteId],pCallback);};};__cov_BTWRa_pzbywty9EK6LHspw.s['11']++;module.exports=new SendsDao();