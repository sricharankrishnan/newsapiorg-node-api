/* standardized success response */
class SuccessResponse {
  constructor() {
    this.code = "api-ok",
    this.message = "Request completed. Check payload for more information",
    this.payload = null
  };
};
module.exports = SuccessResponse;
