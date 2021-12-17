
var http = require('http');

var app = http.createServer(function(req, res) {
  res.writeHead(200, 'Content-Type', 'application/json');
  res.end(JSON.stringify({ "message " : "hello wold", 
                           "status"   : 200   }));
});

app.listen(3000);