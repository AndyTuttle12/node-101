var http = require("http");
// console.log(http);
var server = http.createServer((req, res)=>{
	// console.log(req.rawHeaders[1]);

	res.writeHead(200, {'content-type':'text/html'});

	res.end("Hello, Friend. This is your node server.")
});
var port = 8000;
console.log("Server listening on port " + port + " for connection...")
server.listen(port);