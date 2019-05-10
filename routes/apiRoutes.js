var db = require("../models");
var axios = require("axios");


module.exports = function (app) {

  app.post("/api/homepage/submit", function (req, res) {
    db.Post.create({
      callo: req.body.callo,
      numMeals: req.body.numMeals
    })
      .then(function (dbPost) {
        res.json(dbPost);
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

    axios.get(queryURL, settings).then(function (response) {
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
}

// app.post("/api/meal/submit", function (req, res) {

//   db.Post.create({
//     m1_foods: req.body.m1_foods,
//     m1_cal: req.body.m1_cal,
//     m2_foods: req.body.m2_foods,
//     m2_cal: req.body.m2_cal,
//     m3_foods: req.body.m3_foods,
//     m3_cal: req.body.m3_cal,
//     m4_foods: req.body.m4_foods,
//     m4_cal: req.body.m4_cal,
//     m5_foods: req.body.m5_foods,
//     m5_cal: req.body.m5_cal,
//     m6_foods: req.body.m6_foods,
//     m6_cal: req.body.m6_cal,
//   })
//     .then(function (dbPost) {
//       res.json(dbPost);
//     });
// });

