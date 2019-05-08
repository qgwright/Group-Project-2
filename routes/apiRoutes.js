var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  
app.post("/api/homepage/submit", function(req, res) {
  db.Post.create({
    callo: req.body.callo,
    numMeals: req.body.numMeals
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});


app.post("/api/meal/submit", function(req, res) {
 
  db.Post.create({
  m1_foods: req.body.m1_foods,
  m1_cal: req.body.m1_cal,
  m2_foods: req.body.m2_foods,
  m2_cal: req.body.m2_cal,
  m3_foods: req.body.m3_foods,
  m3_cal: req.body.m3_cal,
  m4_foods: req.body.m4_foods,
  m4_cal: req.body.m4_cal,
  m5_foods: req.body.m5_foods,
  m5_cal: req.body.m5_cal,
  m6_foods: req.body.m6_foods,
  m6_cal: req.body.m6_cal,
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

};