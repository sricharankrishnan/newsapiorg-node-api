/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

module.exports = () => {
  consoleLogger("Sample Message - API Handler");
};
