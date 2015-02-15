var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/styles'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});