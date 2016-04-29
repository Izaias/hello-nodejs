// https://www.youtube.com/watch?v=TAZaYjk7klo

var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World!</h1>");
	response.end();
});

server.listen(3000, function() {
	console.log("servidor Hello World rodando!");
});