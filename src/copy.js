"use strict";function copyHeaders(e,o){for(const[s,c]of Object.entries(e.headers)){try{o.header(s,c)}catch(err){console.log(err.message)}}}module.exports=copyHeaders;
