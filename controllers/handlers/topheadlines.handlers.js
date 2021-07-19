/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const HandlerTemplate = require(__base + "/utils/handler-template.js");

/* imports */
const fileImports = {
  models: {
    error: require(__base + "/models/error-response.models.js"),
    success: require(__base + "/models/success-response.models.js")
  },
  api: {
    ApiHandler: require("../api/index.api.js")
  },
  service: {
    ApiService: require("../service/index.service.js")
  }
};

class Handler extends HandlerTemplate {
  constructor(req, res) {
    super(req, res);
  }

  /* entry */
  static main(req, res) {
    let handler = new Handler(req, res);
    handler.initialize();
  };

  /* start */
  initialize() {
    let $this = this;
    
    /* instantiate these classes so that they can be used */
    let {ApiService} = fileImports.service;
    let {ApiHandler} = fileImports.api;
    $this.service = new ApiService();
    $this.apiHandler = new ApiHandler();

    /* fetch the request payload and build the request url */
    let {body:payload} = $this.req;
    let requestUrl = $this.service.createRequestForTopHeadlines(payload);
    
    /* make the request and return to client */
    $this.getInfoAndReturnResponse(requestUrl);
  };

  getInfoAndReturnResponse(urlString) {
    let $this = this;
    $this.apiHandler.makeGetRequestAndReturnJson(urlString, function(sourcesResponse) {
      $this.res.json(sourcesResponse);
    });
  };
};
module.exports = Handler.main;
