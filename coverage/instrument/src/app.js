
var __cov_vZydzTFPLX31KTWzpqTVBA = (Function('return this'))();
if (!__cov_vZydzTFPLX31KTWzpqTVBA.__coverage__) { __cov_vZydzTFPLX31KTWzpqTVBA.__coverage__ = {}; }
__cov_vZydzTFPLX31KTWzpqTVBA = __cov_vZydzTFPLX31KTWzpqTVBA.__coverage__;
if (!(__cov_vZydzTFPLX31KTWzpqTVBA['src/app.js'])) {
   __cov_vZydzTFPLX31KTWzpqTVBA['src/app.js'] = {"path":"src/app.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":19,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":22}}}},"statementMap":{"1":{"start":{"line":11,"column":0},"end":{"line":11,"column":27}},"2":{"start":{"line":12,"column":0},"end":{"line":12,"column":33}},"3":{"start":{"line":13,"column":0},"end":{"line":13,"column":40}},"4":{"start":{"line":14,"column":0},"end":{"line":14,"column":44}},"5":{"start":{"line":15,"column":0},"end":{"line":15,"column":31}},"6":{"start":{"line":16,"column":0},"end":{"line":16,"column":39}},"7":{"start":{"line":17,"column":0},"end":{"line":17,"column":31}},"8":{"start":{"line":19,"column":0},"end":{"line":29,"column":2}},"9":{"start":{"line":21,"column":4},"end":{"line":21,"column":24}},"10":{"start":{"line":22,"column":4},"end":{"line":22,"column":31}},"11":{"start":{"line":23,"column":4},"end":{"line":23,"column":28}},"12":{"start":{"line":24,"column":4},"end":{"line":24,"column":27}},"13":{"start":{"line":25,"column":4},"end":{"line":25,"column":78}},"14":{"start":{"line":26,"column":4},"end":{"line":26,"column":66}},"15":{"start":{"line":27,"column":4},"end":{"line":27,"column":51}},"16":{"start":{"line":28,"column":4},"end":{"line":28,"column":15}},"17":{"start":{"line":31,"column":0},"end":{"line":31,"column":27}}},"branchMap":{}};
}
__cov_vZydzTFPLX31KTWzpqTVBA = __cov_vZydzTFPLX31KTWzpqTVBA['src/app.js'];
__cov_vZydzTFPLX31KTWzpqTVBA.s['1']++;var path=require('path');__cov_vZydzTFPLX31KTWzpqTVBA.s['2']++;var express=require('express');__cov_vZydzTFPLX31KTWzpqTVBA.s['3']++;var bodyParser=require('body-parser');__cov_vZydzTFPLX31KTWzpqTVBA.s['4']++;var cookieParser=require('cookie-parser');__cov_vZydzTFPLX31KTWzpqTVBA.s['5']++;var multer=require('multer');__cov_vZydzTFPLX31KTWzpqTVBA.s['6']++;var favicon=require('serve-favicon');__cov_vZydzTFPLX31KTWzpqTVBA.s['7']++;var logger=require('morgan');__cov_vZydzTFPLX31KTWzpqTVBA.s['8']++;var App=function(){'use strict';__cov_vZydzTFPLX31KTWzpqTVBA.f['1']++;__cov_vZydzTFPLX31KTWzpqTVBA.s['9']++;var app=express();__cov_vZydzTFPLX31KTWzpqTVBA.s['10']++;app.use(bodyParser.json());__cov_vZydzTFPLX31KTWzpqTVBA.s['11']++;app.use(cookieParser());__cov_vZydzTFPLX31KTWzpqTVBA.s['12']++;app.use(logger('dev'));__cov_vZydzTFPLX31KTWzpqTVBA.s['13']++;app.use(favicon(path.join(__dirname,'public','images','favicon.png')));__cov_vZydzTFPLX31KTWzpqTVBA.s['14']++;app.use(multer({dest:__dirname+'/public/images/uploads'}));__cov_vZydzTFPLX31KTWzpqTVBA.s['15']++;app.use(express.static(__dirname+'/public'));__cov_vZydzTFPLX31KTWzpqTVBA.s['16']++;return app;};__cov_vZydzTFPLX31KTWzpqTVBA.s['17']++;module.exports=new App();