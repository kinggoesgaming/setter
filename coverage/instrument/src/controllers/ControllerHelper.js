
var __cov_pLk2UQtBhB4Ag5dhF2f9Fw = (Function('return this'))();
if (!__cov_pLk2UQtBhB4Ag5dhF2f9Fw.__coverage__) { __cov_pLk2UQtBhB4Ag5dhF2f9Fw.__coverage__ = {}; }
__cov_pLk2UQtBhB4Ag5dhF2f9Fw = __cov_pLk2UQtBhB4Ag5dhF2f9Fw.__coverage__;
if (!(__cov_pLk2UQtBhB4Ag5dhF2f9Fw['src/controllers/ControllerHelper.js'])) {
   __cov_pLk2UQtBhB4Ag5dhF2f9Fw['src/controllers/ControllerHelper.js'] = {"path":"src/controllers/ControllerHelper.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":21,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":28}}},"2":{"name":"(anonymous_2)","line":30,"loc":{"start":{"line":30,"column":33},"end":{"line":30,"column":49}}},"3":{"name":"(anonymous_3)","line":31,"loc":{"start":{"line":31,"column":15},"end":{"line":31,"column":32}}}},"statementMap":{"1":{"start":{"line":9,"column":0},"end":{"line":9,"column":39}},"2":{"start":{"line":10,"column":0},"end":{"line":10,"column":41}},"3":{"start":{"line":21,"column":0},"end":{"line":35,"column":2}},"4":{"start":{"line":30,"column":4},"end":{"line":34,"column":6}},"5":{"start":{"line":31,"column":8},"end":{"line":33,"column":10}},"6":{"start":{"line":32,"column":12},"end":{"line":32,"column":29}},"7":{"start":{"line":37,"column":0},"end":{"line":37,"column":33}}},"branchMap":{}};
}
__cov_pLk2UQtBhB4Ag5dhF2f9Fw = __cov_pLk2UQtBhB4Ag5dhF2f9Fw['src/controllers/ControllerHelper.js'];
__cov_pLk2UQtBhB4Ag5dhF2f9Fw.s['1']++;var theDB=require('../DBConnection');__cov_pLk2UQtBhB4Ag5dhF2f9Fw.s['2']++;var theMessages=require('../Messages');__cov_pLk2UQtBhB4Ag5dhF2f9Fw.s['3']++;var DaoHelper=function(){'use strict';__cov_pLk2UQtBhB4Ag5dhF2f9Fw.f['1']++;__cov_pLk2UQtBhB4Ag5dhF2f9Fw.s['4']++;this.createDefaultCallback=function(pRes){__cov_pLk2UQtBhB4Ag5dhF2f9Fw.f['2']++;__cov_pLk2UQtBhB4Ag5dhF2f9Fw.s['5']++;return function(pData){__cov_pLk2UQtBhB4Ag5dhF2f9Fw.f['3']++;__cov_pLk2UQtBhB4Ag5dhF2f9Fw.s['6']++;pRes.send(pData);};};};__cov_pLk2UQtBhB4Ag5dhF2f9Fw.s['7']++;module.exports=new DaoHelper();