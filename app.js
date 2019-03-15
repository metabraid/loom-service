var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "api_name": "Metabraid Loom v-0.0.1"
  });
});

app.post('/', function(req, res) {
  res.send({
    "api_name": "Metabraid Loom v-0.0.1"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
