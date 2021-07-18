/* establish an approot */
global.approot = __dirname;

/* package imports */
let __base = global.approot;
require("dotenv").config();
let express = require("express");

/* app imports */
let consoleLogger = require(__base + "/utils/logger.js");
let routes = require(__base + "/routes/index.routes.js");

const App = () => {
  let app = express();
  let {PORT} = process.env;
  
  /* call routes central handler */
  routes(app);

  /* start the server */
  app.listen(PORT, function() {
    consoleLogger(`News.Api.Org - server running in ${PORT}`);
    consoleLogger("How can I help you today?");
  });
};
App();
