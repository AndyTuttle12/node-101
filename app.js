// Include http module.
var http = require('http');
// include fs
var fs = require("fs");
function renderHomePage(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var theHomePageHTML = fs.readFileSync('homePage.html');
	res.end(theHomePageHTML);

	// res.writeHead(200,{'content-type':'text/html'});
	// res.write('<h1>This is the home page.</h1>');
	// res.write('<p>I\'m very proud of my node router!</p>');
	// res.write('<p>I made a thing...</p>');
	// res.end();
}

var server = http.createServer((req, res)=>{

	console.log("Someone connected to the server!");

	console.log(req.url);

	if(req.url === '/'){
		// cut and put in renderHomnePage()
		renderHomePage(req, res);
	}else if(req.url === '/logo.png'){
		var img = fs.readFileSync('logo.png');
		res.writeHead(200,{'content-type':'image/png'});
		res.end(img);
	}else{
		res.writeHead(404, {'content-type':'text/html'});
		res.end('Sorry this page does not exist!');
	}

	res.end("Sanity Check.");
});
var port = 8001;
server.listen(port);
console.log("Server is listening for HTTP traffic at port " + port +"...");
