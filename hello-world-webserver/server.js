var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("Hello World!\n");
  response.end();
}).listen(8080);

console.log('Server listening on http://localhost:8080/');