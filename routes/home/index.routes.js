/**
  * home/root route
  **/

let __base = global.approot;
let app = require(__base + "/server.js");
let appMiddleware = require(__base + "/middleware/app.middleware.js");
let controller = require(__base + "/controllers/home/handlers/index.handlers.js");

module.exports = (app) => {
  app.get("/", appMiddleware.middlewares, controller);
};

