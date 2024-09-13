"use strict";function bye(e,s,n){const r=e.params.originSize||0;s.header("x-proxy-bypass",1);if(r>0){s.header("content-length",r)}return s.code(200).send(n)}module.exports=bye;
