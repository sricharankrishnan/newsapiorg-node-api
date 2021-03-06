/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const HandlerTemplate = require(__base + "/utils/handler-template.js");

/* imports */
const fileImports = {
  api: {
    ApiHandler: require("../api/index.api.js")
  },
  service: {
    ApiService: require("../service/index.service.js")
  },
  models: {
    error: require(__base + "/models/error-response.models.js"),
    success: require(__base + "/models/success-response.models.js")
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

    /* get the request body from the payload sent from the client */
    let {body: payload} = $this.req;
    let requestUrl = $this.service.createRequestForSources(payload); 
    
    /* make the request and return to client */
    $this.getInfo(requestUrl);
  };

  getInfo(urlString) {
    let $this = this;
    $this.apiHandler.makeGetRequestAndReturnJson(urlString, function(sourcesResponse) {
      $this.buildAndSendResponse(sourcesResponse);
    });
  };

  buildAndSendResponse(response) {
    let $this = this;
    let {error:ErrorResponse, success: SuccessResponse} = fileImports.models;

    /* if there were no issues */
    if (response.status === 200 || response.statusText === "OK") {
      let success = new SuccessResponse();
      success.payload = response.data.sources;
      success.code = (response.data.sources.length > 0) ? $this.API_OK : $this.API_NO_DATA;
      success.message = (response.data.sources.length > 0) ? "Successfully found records. Check payload for more information" : "No records were found in the request";
      $this.res.json(success);
    }
    /* if we ran into some problem... */
    else {
      let error = new ErrorResponse();
      error.payload = response;
      $this.res.json(error);
    }
  };
};
module.exports = Handler.main;
