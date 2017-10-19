var mongoose = require("mongoose");
//var UserUrl = require("../models/UserUrl");
var templateController = require("../controllers/templateController");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index.html")
    });

    app.post("/submit", templateController);
    
}