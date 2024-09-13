#!/usr/bin/env node
'use strict';

const fastify = require('fastify')();
const processRequest = require('./src/poco.js'); // Import the default export

const PORT = process.env.PORT || 8080;

// Set up the route
fastify.get('/', async (request, reply) => {
  return processRequest(request, reply);
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: PORT });
    console.log(`Listening on ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
