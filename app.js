const express = require('express');
const app = express();

const resources = [
  { name: 'code_repo', description: 'URI for the repo' },
  { name: 'source_codes', description: 'array of source code paths' }
]

app.get('/', function(req, res) {
  res.json(resources);
});

app.post('/', function(req, res) {
  res.send({
    "api_name": "Metabraid Loom v-0.0.1"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
