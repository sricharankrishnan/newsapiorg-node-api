/* npm imports */
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const minifyHtml = require("express-minify-html");
const express = require("express");

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

/**
  * this file helps to serve all the static file requirements for the web app
  * all the way from images, html, stylesheets etc...
  */
module.exports = (app) => {
  consoleLogger("configuring static files for app...");
  
  /* paths */
  let htmlFilePath = path.join(__base + "/static/views");
  let cssFilePath = path.join(__base + "/static/css");
  let jsFilePath = path.join(__base + "/static/scripts");
  let assetsFilePath = path.join(__base + "/static/assets");
  let publicFilesPath = path.join(__base + "/public");
  
  /* set the app routes and paths for serving the static files */
  app.set("views", htmlFilePath);
  app.use("/styles", express.static(cssFilePath));
  app.use("/scripts", express.static(jsFilePath));
  app.use("/assets", express.static(assetsFilePath));
  app.use(express.static(publicFilesPath));

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
};
