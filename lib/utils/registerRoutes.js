const express = require('express');

const registerRoutes = (app, routes, options) => {
  // eslint-disable-next-line new-cap
  const router = express.Router();

  for (let route of routes) {
    router
      .route(route.path)[route.method](
        ...options.commonMiddlewares,
        ...route.middlewares
      )
      .all(options.methodNotAllowed);
  }

  app.use(options.basePath, router);

  return app;
};

module.exports = registerRoutes;
