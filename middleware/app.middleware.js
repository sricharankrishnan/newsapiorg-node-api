const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");

/* checks the sanity of the url - protection for XSS Attacks */
const checkUrlSanity = (req, res, next) => {
  const protocol = req.protocol;
  const host = req.get("host");
  const pathname = req.path;
  const qparam = req.query;
  const sanityPattern = /[,;@#|'<>^*()!{}"]/;

  let protocolIsInsane = sanityPattern.test(protocol);
  let hostIsInsane = sanityPattern.test(host);
  let pathnameIsInsane = sanityPattern.test(pathname);
  let queryStringIsInsane = false;

  for (let prop in qparam) {
    if (qparam.hasOwnProperty(prop)) {
      let propIsInsane = sanityPattern.test(prop);
      let propValueIsInsane = sanityPattern.test(qparam[prop]);
      if (propIsInsane === true || propValueIsInsane === true) {
        queryStringIsInsane = true;
        break;
      }
    }
  }

  if (protocolIsInsane === false && hostIsInsane === false && pathnameIsInsane === false && queryStringIsInsane === false) {
    next();
  }
  else {
    res.send("Unauthorized request sent!");
  }
}

module.exports = {
  middlewares: [checkUrlSanity]
};
