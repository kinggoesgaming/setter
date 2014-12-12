
var __cov_NEGGf_S8rbo$$7UC17zm8g = (Function('return this'))();
if (!__cov_NEGGf_S8rbo$$7UC17zm8g.__coverage__) { __cov_NEGGf_S8rbo$$7UC17zm8g.__coverage__ = {}; }
__cov_NEGGf_S8rbo$$7UC17zm8g = __cov_NEGGf_S8rbo$$7UC17zm8g.__coverage__;
if (!(__cov_NEGGf_S8rbo$$7UC17zm8g['src/controllers/LoginController.js'])) {
   __cov_NEGGf_S8rbo$$7UC17zm8g['src/controllers/LoginController.js'] = {"path":"src/controllers/LoginController.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":24,"loc":{"start":{"line":24,"column":22},"end":{"line":24,"column":34}}},"2":{"name":"(anonymous_2)","line":27,"loc":{"start":{"line":27,"column":17},"end":{"line":27,"column":39}}},"3":{"name":"(anonymous_3)","line":35,"loc":{"start":{"line":35,"column":43},"end":{"line":35,"column":63}}},"4":{"name":"(anonymous_4)","line":42,"loc":{"start":{"line":42,"column":56},"end":{"line":42,"column":80}}}},"statementMap":{"1":{"start":{"line":12,"column":0},"end":{"line":12,"column":48}},"2":{"start":{"line":13,"column":0},"end":{"line":13,"column":51}},"3":{"start":{"line":14,"column":0},"end":{"line":14,"column":41}},"4":{"start":{"line":15,"column":0},"end":{"line":15,"column":46}},"5":{"start":{"line":16,"column":0},"end":{"line":16,"column":35}},"6":{"start":{"line":24,"column":0},"end":{"line":53,"column":2}},"7":{"start":{"line":27,"column":4},"end":{"line":52,"column":6}},"8":{"start":{"line":28,"column":8},"end":{"line":30,"column":21}},"9":{"start":{"line":31,"column":8},"end":{"line":31,"column":25}},"10":{"start":{"line":32,"column":8},"end":{"line":32,"column":27}},"11":{"start":{"line":33,"column":8},"end":{"line":33,"column":33}},"12":{"start":{"line":35,"column":8},"end":{"line":51,"column":11}},"13":{"start":{"line":36,"column":12},"end":{"line":40,"column":13}},"14":{"start":{"line":37,"column":16},"end":{"line":37,"column":33}},"15":{"start":{"line":38,"column":16},"end":{"line":38,"column":36}},"16":{"start":{"line":39,"column":16},"end":{"line":39,"column":23}},"17":{"start":{"line":42,"column":12},"end":{"line":49,"column":15}},"18":{"start":{"line":43,"column":16},"end":{"line":48,"column":17}},"19":{"start":{"line":44,"column":20},"end":{"line":44,"column":75}},"20":{"start":{"line":46,"column":20},"end":{"line":46,"column":37}},"21":{"start":{"line":47,"column":20},"end":{"line":47,"column":67}},"22":{"start":{"line":55,"column":0},"end":{"line":55,"column":39}}},"branchMap":{"1":{"line":36,"type":"if","locations":[{"start":{"line":36,"column":12},"end":{"line":36,"column":12}},{"start":{"line":36,"column":12},"end":{"line":36,"column":12}}]},"2":{"line":43,"type":"if","locations":[{"start":{"line":43,"column":16},"end":{"line":43,"column":16}},{"start":{"line":43,"column":16},"end":{"line":43,"column":16}}]}}};
}
__cov_NEGGf_S8rbo$$7UC17zm8g = __cov_NEGGf_S8rbo$$7UC17zm8g['src/controllers/LoginController.js'];
__cov_NEGGf_S8rbo$$7UC17zm8g.s['1']++;var randomstring=require('just.randomstring');__cov_NEGGf_S8rbo$$7UC17zm8g.s['2']++;var theAccountsDao=require('../dao/AccountsDao');__cov_NEGGf_S8rbo$$7UC17zm8g.s['3']++;var theMessages=require('../Messages');__cov_NEGGf_S8rbo$$7UC17zm8g.s['4']++;var theLoginHelper=require('./LoginHelper');__cov_NEGGf_S8rbo$$7UC17zm8g.s['5']++;var theCrypt=require('../Crypt');__cov_NEGGf_S8rbo$$7UC17zm8g.s['6']++;var LoginController=function(){'use strict';__cov_NEGGf_S8rbo$$7UC17zm8g.f['1']++;__cov_NEGGf_S8rbo$$7UC17zm8g.s['7']++;this.login=function(pReq,pRes){__cov_NEGGf_S8rbo$$7UC17zm8g.f['2']++;__cov_NEGGf_S8rbo$$7UC17zm8g.s['8']++;var body,email,password;__cov_NEGGf_S8rbo$$7UC17zm8g.s['9']++;body=pReq.body;__cov_NEGGf_S8rbo$$7UC17zm8g.s['10']++;email=body.email;__cov_NEGGf_S8rbo$$7UC17zm8g.s['11']++;password=body.password;__cov_NEGGf_S8rbo$$7UC17zm8g.s['12']++;theAccountsDao.getAccountId(email,function(pResults){__cov_NEGGf_S8rbo$$7UC17zm8g.f['3']++;__cov_NEGGf_S8rbo$$7UC17zm8g.s['13']++;if(pResults.error){__cov_NEGGf_S8rbo$$7UC17zm8g.b['1'][0]++;__cov_NEGGf_S8rbo$$7UC17zm8g.s['14']++;pRes.status(400);__cov_NEGGf_S8rbo$$7UC17zm8g.s['15']++;pRes.send(pResults);__cov_NEGGf_S8rbo$$7UC17zm8g.s['16']++;return;}else{__cov_NEGGf_S8rbo$$7UC17zm8g.b['1'][1]++;}__cov_NEGGf_S8rbo$$7UC17zm8g.s['17']++;theCrypt.check(password,pResults.password,function(err,matches){__cov_NEGGf_S8rbo$$7UC17zm8g.f['4']++;__cov_NEGGf_S8rbo$$7UC17zm8g.s['18']++;if(matches){__cov_NEGGf_S8rbo$$7UC17zm8g.b['2'][0]++;__cov_NEGGf_S8rbo$$7UC17zm8g.s['19']++;theLoginHelper.generateAndSendToken(pResults.id,pRes);}else{__cov_NEGGf_S8rbo$$7UC17zm8g.b['2'][1]++;__cov_NEGGf_S8rbo$$7UC17zm8g.s['20']++;pRes.status(400);__cov_NEGGf_S8rbo$$7UC17zm8g.s['21']++;pRes.send(theMessages.error('Invalid Login!'));}});});};};__cov_NEGGf_S8rbo$$7UC17zm8g.s['22']++;module.exports=new LoginController();