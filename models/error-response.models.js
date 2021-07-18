/* standardized error response */
class ErrorResponse {
  constructor() {
    this.code = "api-fail",
    this.message = "Request has failed or has encounted some error. Check payload (if applicable)",
    this.payload = null
  };
}
module.exports = ErrorResponse;
