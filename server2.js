#!/usr/bin/env node
"use strict";const t=require("fastify")();const o=require("./src/poco.js");const s=process.env.PORT||8080;t.get("/",async(s,t)=>{return o(s,t)});const e=async()=>{try{await t.listen({host:"0.0.0.0",port:s});console.log(`Listening on ${s}`)}catch(s){t.log.error(s);process.exit(1)}};e();
