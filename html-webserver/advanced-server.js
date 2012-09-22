var http = require('http');
var fs = require('fs');
var server = http.createServer();

// We implement an event listener for a request event on our server
server.on('request', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  // We read from index.html and write to our response
  // readFile() is reading in a non-blocking way
  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });
});

// We can also implement another event listener on that same event
// (used here for logging to console)
server.on('request', function(request, response) {
  var currentTime = new Date();
  var dd = currentTime.getDay();
  var mm = currentTime.getMonth() + 1;
  var yyyy = currentTime.getFullYear();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  var timeString = '['+dd+'-'+mm+'-'+yyyy+' '+h+':'+m+':'+s+']'
  console.log(timeString + ' \"' + request.method + ' ' + request.url + ' HTTP/' + request.httpVersion + '\" ' + response.statusCode);
});

// Make our server listen on port 8080
server.listen(8080);

console.log('Server listening on http://localhost:8080/');