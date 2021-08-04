<<<<<<< HEAD
var createError = require('html-errors');
=======
var createError = require('html-error');
>>>>>>> 1d7f61dd2f1eafb7707224f73584d4cac9f83cd7

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from pod: ' + process.environment.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

