/**
  * this is the central routes file from which all routes are imported
  * from various sections of the app and intialized with the app param
  *
  * @example-route-function(app);
  */

let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let approot = global.approot;

/* route imports */
let serveAppStatics = require("./serve-static/index.js");
let home = require("./home/index.js");

function routesCentral(app) {
  console.log(">_ routes central");
  /* helps to serve all the static files */
  serveAppStatics(app);

  /* page routes */
  home(app);
}
module.exports = routesCentral;  
