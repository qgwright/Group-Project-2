var db = require("../models");
var axios = require("axios");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/autocomplete", function (req, res) {

    var userInput = req.body.food.trim();
    var queryURL = "https://trackapi.nutritionix.com/v2/search/instant/?query=" + userInput;

    var settings = {
      "headers": {
        "x-app-id": process.env.APP_ID,
        "x-app-key": process.env.APP_KEY
      }
    }

    axios.get(queryURL, settings).then(function(response) {
      res.json(response.data.common);
    });

    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    //   $exampleList.empty();
    //   for (var i = 0; i < response.common.length; i++) {
    //     var food = response.common[i];
    //     $exampleList.append("<p class=\"food\" data-name=" + food.food_name + "\">" + food.food_name + "</p>");
    //     $exampleList.append("<img src=\"" + food.photo.thumb + "\" width=100 height=100>");
    //   }
    // });
  });
};
