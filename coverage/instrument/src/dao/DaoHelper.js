
var __cov_OGsHXcfGEhhO5PvijvEihw = (Function('return this'))();
if (!__cov_OGsHXcfGEhhO5PvijvEihw.__coverage__) { __cov_OGsHXcfGEhhO5PvijvEihw.__coverage__ = {}; }
__cov_OGsHXcfGEhhO5PvijvEihw = __cov_OGsHXcfGEhhO5PvijvEihw.__coverage__;
if (!(__cov_OGsHXcfGEhhO5PvijvEihw['src/dao/DaoHelper.js'])) {
   __cov_OGsHXcfGEhhO5PvijvEihw['src/dao/DaoHelper.js'] = {"path":"src/dao/DaoHelper.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":21,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":28}}},"2":{"name":"(anonymous_2)","line":24,"loc":{"start":{"line":24,"column":24},"end":{"line":24,"column":62}}},"3":{"name":"(anonymous_3)","line":25,"loc":{"start":{"line":25,"column":37},"end":{"line":25,"column":63}}}},"statementMap":{"1":{"start":{"line":9,"column":0},"end":{"line":9,"column":39}},"2":{"start":{"line":10,"column":0},"end":{"line":10,"column":41}},"3":{"start":{"line":21,"column":0},"end":{"line":34,"column":2}},"4":{"start":{"line":24,"column":4},"end":{"line":33,"column":6}},"5":{"start":{"line":25,"column":8},"end":{"line":32,"column":11}},"6":{"start":{"line":26,"column":12},"end":{"line":26,"column":30}},"7":{"start":{"line":27,"column":12},"end":{"line":31,"column":13}},"8":{"start":{"line":28,"column":16},"end":{"line":28,"column":45}},"9":{"start":{"line":30,"column":16},"end":{"line":30,"column":36}},"10":{"start":{"line":36,"column":0},"end":{"line":36,"column":33}}},"branchMap":{"1":{"line":27,"type":"if","locations":[{"start":{"line":27,"column":12},"end":{"line":27,"column":12}},{"start":{"line":27,"column":12},"end":{"line":27,"column":12}}]},"2":{"line":27,"type":"binary-expr","locations":[{"start":{"line":27,"column":16},"end":{"line":27,"column":20}},{"start":{"line":27,"column":24},"end":{"line":27,"column":44}}]}}};
}
__cov_OGsHXcfGEhhO5PvijvEihw = __cov_OGsHXcfGEhhO5PvijvEihw['src/dao/DaoHelper.js'];
__cov_OGsHXcfGEhhO5PvijvEihw.s['1']++;var theDB=require('../DBConnection');__cov_OGsHXcfGEhhO5PvijvEihw.s['2']++;var theMessages=require('../Messages');__cov_OGsHXcfGEhhO5PvijvEihw.s['3']++;var DaoHelper=function(){'use strict';__cov_OGsHXcfGEhhO5PvijvEihw.f['1']++;__cov_OGsHXcfGEhhO5PvijvEihw.s['4']++;this.executeQuery=function(pQuery,pValues,pCallback){__cov_OGsHXcfGEhhO5PvijvEihw.f['2']++;__cov_OGsHXcfGEhhO5PvijvEihw.s['5']++;theDB.query(pQuery,pValues,function(pErr,pResults){__cov_OGsHXcfGEhhO5PvijvEihw.f['3']++;__cov_OGsHXcfGEhhO5PvijvEihw.s['6']++;console.log(pErr);__cov_OGsHXcfGEhhO5PvijvEihw.s['7']++;if((__cov_OGsHXcfGEhhO5PvijvEihw.b['2'][0]++,pErr)||(__cov_OGsHXcfGEhhO5PvijvEihw.b['2'][1]++,pResults.length<=0)){__cov_OGsHXcfGEhhO5PvijvEihw.b['1'][0]++;__cov_OGsHXcfGEhhO5PvijvEihw.s['8']++;pCallback(theMessages.ERROR);}else{__cov_OGsHXcfGEhhO5PvijvEihw.b['1'][1]++;__cov_OGsHXcfGEhhO5PvijvEihw.s['9']++;pCallback(pResults);}});};};__cov_OGsHXcfGEhhO5PvijvEihw.s['10']++;module.exports=new DaoHelper();
