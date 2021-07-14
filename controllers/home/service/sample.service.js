/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

module.exports = () => {
  consoleLogger("Building meta details...");

  let meta = {
    title_tag: "Welome to the Node-App-Jquery Boiler Plate",
    description: "This is a sample web application that is built with NodeJS and Jquery",
    canonical_url: ""
  };
  return meta;
};
