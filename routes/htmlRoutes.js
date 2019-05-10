var db = require("../models");
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homepage.html"));
  });

  app.get("/meal1", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/meal1.html"));
  });

  app.get("/meal2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/meal2.html"));
  });
  
  app.get("/meal3", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/meal3.html"));
  });

  app.get("/meal4", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/meal4.html"));
  });

  app.get("/meal5", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/meal5.html"));
  });

  app.get("/meal6", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/meal6.html"));
  });

  app.get("*", function(req, res) {
    res.render("404");
  });


};
