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
  data: {
    options: require(__base + "/controllers/data/options.json")
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

    /* de-struct and build */
    let {success:SuccessResponse} = fileImports.models;
    let successResponse = new SuccessResponse();
    successResponse.payload = fileImports.data.options;

    /* send response to client */
    $this.res.json(successResponse);
  };
};
module.exports = Handler.main;
