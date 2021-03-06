/* npm imports */
const axios = require("axios");

/* app imports */
const __base = global.approot;
const consoleLogger = require(__base + "/utils/logger.js");
const logApiError = require(__base + "/utils/log-api-error.js");

const fileImports = {
  models: {
    ErrorResponse: require(__base + "/models/error-response.models.js"),
    SuccessResponse: require(__base + "/models/success-response.models.js")
  },
};

class ApiHandler {
  constructor() {
    this.API_OK = "api-ok";
    this.API_FAIL = "api-fail";
    this.API_NO_DATA = "api-no-data";
  };

  /* fetches user info */
  fetchGithubUser(username, callback) {
    let $this = this;
    let {ErrorResponse, SuccessResponse} = fileImports.models;
    let urlString = `https://api.github.com/users/${username}`;

    axios.get(urlString).then((response) => {
      if (response.status === 200 || response.statusText === "OK") {
        let success = new SuccessResponse();
        let {name, bio, avatar_url, html_url} = response.data;

        success.message = "Welcome to News.Api.Org Node API (Open Source)";
        success.description = "A free API system available for developers when using the api endpoints from https://newsapi.org/";
        success.author = {name, bio, avatar_url, html_url};
        callback(success);
      }
      else {
        let error = new ErrorResponse();

        error.message = "Could not fetch information from Github. This system could possibly be down!";
        error.payload = response.data;
        callback(error);
      }
    })
    .catch((error) => {
      logApiError(error);
      $this.sendExceptionCaughtResponseToCaller(error, callback);
    });
  };

  /* makes the request */
  makeGetRequestAndReturnJson(requestUrl, callback) {
    let $this = this;
    let {ErrorResponse, SuccessResponse} = fileImports.models;

    axios.get(requestUrl).then((response) => {
      callback(response);
    })
    .catch((error) => {
      logApiError(error);
      $this.sendExceptionCaughtResponseToCaller(error, callback);
    });
  };

  /* exception handler method */
  sendExceptionCaughtResponseToCaller(error, callback) {
    if ("response" in error) {
      callback(error.response.data);
    }
    else if ("request" in error) {
      callback(error.request);
    }
    else {
      callback(error.message);
    }
  };
};
module.exports = ApiHandler;
