/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const HandlerTemplate = require(__base + "/utils/handler-template.js");

/* imports */
const fileImports = {
  service: {
    sampleService: require("../service/sample.service.js")
  },
  api: {
    sampleApi: require("../api/sample.api.js")
  }
};

class Handler extends HandlerTemplate {
  constructor(req, res) {
    super(req, res);
  }

  /* entry */
  static main(req, res) {
    consoleLogger("Home Page - initializing.");
    let handler = new Handler(req, res);
    handler.initialize();
  };

  /* start */
  initialize() {
    let $this = this;
    const {sampleService} = fileImports.service;
    const {sampleApi} = fileImports.api;

    /* meta */
    $this.to_template["meta_tags"] = sampleService();

    /* sample call to an api file */
    sampleApi();

    /* render */
    $this.performRender("home/templates/index.html");
  };
};

module.exports = Handler.main;
