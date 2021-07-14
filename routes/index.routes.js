/* app imports */
const __base = global.approot;

/* routes imports */
const serveStatic = require(__base + "/routes/static.routes.js");
const home = require(__base + "/routes/home/index.routes.js");

/* list and invoke all routes from this point */
module.exports = (app) => {
  serveStatic(app);
  home(app);
};

