var TemplateModel = require("../models/templateModel");

module.exports = function(req, res, next) {
    
    var tempUrl = new TemplateModel({
        url: req.body.templateUrl
    })
    
    tempUrl.save(function(err) {
        if (err) return console.log(err);
    })
    
     res.send("POST request received");
}