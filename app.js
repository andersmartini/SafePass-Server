var express = require("express");
var utils = require("./utils/util.js");
var router = require("./routes/index.js");

var app = express.createServer();
/****************	Settings	*************************/

app.set('view engine', 'jade');


/****************** Middleware ****************************/

app.use(express.static(__dirname + '/public'));
app.use("/salt", utils.authenticate);

router.route(app);

app.listen(3000,function(){console.log("Listening to 3000")});