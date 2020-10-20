/**
  * this file helps to serve all the static file requirements for the web app
  * all the way from images, html, stylesheets etc...
  */

let path = require("path");
let bodyParser = require("body-parser");
let ejs = require("ejs");
let express = require("express");
let minifyHtml = require("express-minify-html");
let approot = global.approot;

function serveAppStatics(app) {
  console.log(">_ serve statics");
  let apphtml = path.join(approot, "app-views", "views");
  let appcss = path.join(approot, "app-views", "css");
  let appjs = path.join(approot, "app-views", "scripts");
  let appassets = path.join(approot, "app-views", "assets");

  /* set the app routes and paths for serving the static files */
  app.set("views", apphtml);
  app.use("/styles", express.static(appcss));
  app.use("/scripts", express.static(appjs));
  app.use("/assets", express.static(appassets));

  /* templating engine and other misc */
  app.set("view engine", "ejs");
  app.engine("html", ejs.renderFile);
  app.disable("x-powered-by");
  app.use(bodyParser.json());
  
  /* helps to minify html files when being used with ejs templating for this app */
  app.use(minifyHtml({
    override: true,
    htmlMinifier: {
      removeEmptyAttributes: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true
    }
  }));
}
module.exports = serveAppStatics;
