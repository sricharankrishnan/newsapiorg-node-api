/**
  * this file is a sample home page route req.res handler.
  */

function homePageHandler(req, res) {
  let to_template = {};

  /* meta data */
  to_template["meta_tags"] = {
    title_tag: "Welome to the Node-App-Jquery Boiler Plate",
    description: "This is a sample web application that is built with NodeJS and Jquery",
    canonical_url: ""
  };

  console.log(">_ rendering home");

  /* render the page */
  res.render("home/templates/index.html", to_template);
}
module.exports = homePageHandler;
