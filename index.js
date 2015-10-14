var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Priceline.com</h1>\n');
  res.write('<h2>Find cat friendly Hotels</h2>\n');
  res.end();
}).listen(3000);

console.log('Server running at http://0.0.0.0:3000/');
