/* app imports */
const __base = global.approot;
const appMiddleware = require(__base + "/middleware/app.middleware.js");

/* routes imports */
const serveStatic = require(__base + "/routes/static.routes.js");
const rootController = require(__base + "/controllers/handlers/index.handlers.js");
const sourcesController = require(__base + "/controllers/handlers/sources.handlers.js");
const optionsController = require(__base + "/controllers/handlers/options.handlers.js");
const topHeadlinesController = require(__base + "/controllers/handlers/topheadlines.handlers.js");
const everythingController = require(__base + "/controllers/handlers/everything.handlers.js");

/* list and invoke all routes from this point */
module.exports = (app) => {
  serveStatic(app);
  app.get("/", appMiddleware.middlewares, rootController);
  app.get("/api/options", appMiddleware.middlewares, optionsController);
  app.post("/api/fetch-sources", appMiddleware.middlewares, sourcesController); 
  app.post("/api/fetch-top-headlines", appMiddleware.middlewares, topHeadlinesController);
  app.post("/api/fetch-everything", appMiddleware.middlewares, everythingController);
};

