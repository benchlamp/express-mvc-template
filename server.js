var express = require("express"),
    mongoose = require("mongoose"),
    dblogin = require("./dblogin"),
    morgan = require("morgan"),
    router = require("./router/mainRouter"),
    bodyParser = require("body-parser"),
    path = require("path"),
    app = express();
    
mongoose.connect(dblogin);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
    console.log("db connection established")
})

app.use(morgan('dev'));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("models", path.join(__dirname + "models"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


router(app);

app.listen(process.env.PORT);