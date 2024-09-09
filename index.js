#!/usr/bin/env node
'use strict';

const fastify = require('fastify')();
const processRequest = require('./src/proxy.js'); // Import the named export
const PORT = process.env.PORT || 8080;

fastify.get('/', processRequest);
fastify.listen({host: '0.0.0.0', port: PORT });
