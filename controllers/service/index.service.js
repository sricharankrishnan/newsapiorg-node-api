class ApiService {
  constructor() {
    this.BASE_URL = "https://newsapi.org";
  };

  isNotFalsyString(string) {
    return string !== null && string !== undefined && string !== "";
  };

  /* for sources */
  createRequestForSources(payload) {
    let $this = this;

    /* set the base */
    let requestUrl = "";
    requestUrl += $this.BASE_URL;
    requestUrl += "/v2/top-headlines/sources?";

    /* iterate and add to the request url */
    for (let prop in payload) {
      if (payload.hasOwnProperty(prop) && $this.isNotFalsyString(payload[prop])) {
        requestUrl += `${prop}=${payload[prop]}&`;
      }
    }
    requestUrl = requestUrl.substring(0, requestUrl.length - 1);
    return requestUrl;
  };

  /* for top headlines */
  createRequestForTopHeadlines(payload) {
    let $this = this;

    /* set the base */
    let requestUrl = "";
    requestUrl += $this.BASE_URL;
    requestUrl += "/v2/top-headlines?";
    
    /* iterate and add to the request url */
    for (let prop in payload) {
      if (payload.hasOwnProperty(prop)) {
        requestUrl += `${prop}=${payload[prop]}&`;
      }
    }
    requestUrl = requestUrl.substring(0, requestUrl.length - 1);
    return requestUrl;
  };

  /* for everything */
  createrRequestForEverything(payload) {
    let $this = this;

    /* set the base */
    let requestUrl = "";
    requestUrl += $this.BASE_URL;
    requestUrl += "/v2/everything?";
    
    /* iterate and add to the request url */
    for (let prop in payload) {
      if (payload.hasOwnProperty(prop)) {
        requestUrl += `${prop}=${payload[prop]}&`;
      }
    }
    requestUrl = requestUrl.substring(0, requestUrl.length - 1);
    return requestUrl;
  };
} 
module.exports = ApiService;
