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


  
app.post("/homepage/submit", function(req, res){
var submit = req.body.button;
});

 
app.post("/allocation/submit", function(req, res){
  var submit = req.body.button;
  });
};

app.post("/api/home/submit", function(req, res) {
  console.log(req.body.button);
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});


app.post("/api/meal/submit", function(req, res) {
  console.log(req.body);
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});