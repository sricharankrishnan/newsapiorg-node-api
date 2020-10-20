/**
  * this is a sample routes file that will help serve contents to the 
  * home page route.
  */

let path = require("path");
let approot = global.approot;
let pageHandler = require(path.join(approot, "app-controller", "handlers", "home", "index.js"));

function routesHandler(app) {
  console.log("routes handler home...");
  app.get("/", pageHandler);
}
module.exports = routesHandler;
