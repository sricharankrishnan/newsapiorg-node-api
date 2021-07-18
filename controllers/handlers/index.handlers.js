/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const HandlerTemplate = require(__base + "/utils/handler-template.js");

/* imports */
const fileImports = {
  api: {
    ApiHandler: require("../api/index.api.js")
  },
  models: {
    error: require(__base + "/models/error-response.models.js"),
    success: require(__base + "/models/success-response.models.js")
  }
};

class Handler extends HandlerTemplate {
  constructor(req, res) {
    super(req, res);
    this.apiHandler = null;
  }

  /* entry */
  static main(req, res) {
    let handler = new Handler(req, res);
    handler.initialize();
  };

  /* start */
  initialize() {
    let $this = this;

    /* initialize the api handler object */
    const {ApiHandler} = fileImports.api;
    $this.apiHandler = new ApiHandler();

    /* next ... */
    $this.fetchDataAndSendToClient();
  };
  
  fetchDataAndSendToClient() {
    let $this = this;
    let {apiHandler} = $this;
    let {error: errorResponse, success: successResponse} = fileImports.models;

    apiHandler.fetchGithubUser("sricharankrishnan", (apiResponse) => {
      $this.res.json(apiResponse);
    });
  };
};
module.exports = Handler.main;
