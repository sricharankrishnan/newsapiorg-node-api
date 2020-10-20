/* establish an approot */
global.approot = __dirname;

/* rqeuired imports for initializing the app */
let path = require("path");
require("dotenv").config();
let express = require("express");
let app = express();
let approot = global.approot;
let routesCentral = require(path.join(approot, "app-controller", "routes", "index.js"));

/* start the server */
let appPort = process.env.PORT;
app.listen(appPort, function() {
  console.log("Node-App-Jquery is running @ http://localhost:" + appPort + "/");
});

/* initialize all the routes for the web app */
routesCentral(app);
