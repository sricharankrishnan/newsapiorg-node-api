/**
  * Common Handler Template Class for all controllers. Extend from 
  * this class and build 
  **/

const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

class HandlerTemplate {  
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.API_OK = "api-ok";
    this.API_FAIL = "api-fail";
    this.API_NO_DATA = "api-no-data";
  }

  /* initializer */
  initialize() {
    throw new Error("Please initialize your class with the 'Class.initialize' method");
  };

  /* render details to the client */
  performRender(renderPathString) {
    consoleLogger("Sending details to the client side...");
    let $this = this;
    $this.res.render(renderPathString, $this.to_template);
  };
}
module.exports = HandlerTemplate;
