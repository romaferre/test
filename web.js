var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = 15000;
app.listen(port, function() {
  console.log("Listening on " + port);
});