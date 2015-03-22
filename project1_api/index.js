var http = require('http'),
    express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.end('Sentiment');
});

http.createServer(app).listen(3000);



