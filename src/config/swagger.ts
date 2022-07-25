// swagger konfiguráció
exports.options = {
  routePrefix: '/api-docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'prAssistant Fastify API',
      description: 'Project Assistant Fastify API documentations',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};
