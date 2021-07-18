/* npm imports */
const bodyParser = require("body-parser");

/**
  * Application configuration done 
  **/
module.exports = (app) => {
  app.disable("x-powered-by");
  app.use(bodyParser.json());
};
