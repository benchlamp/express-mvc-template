var mongoose = require("mongoose");

var templateSchema = mongoose.Schema({
    url: String,
    key: String
})

var TemplateModel = mongoose.model("TemplateModel", templateSchema);

module.exports = TemplateModel;