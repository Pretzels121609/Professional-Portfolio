var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use("/public",express.static("public"));

// connects to home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});