#!/usr/bin/env node
'use strict';

const fastify = require('fastify');
const processRequest = require('./src/proxy.js'); // Use require for named exports
const app = fastify();
const PORT = process.env.PORT || 8080;

app.get('/', processRequest);

app.listen({ host: '0.0.0.0', port: PORT })
