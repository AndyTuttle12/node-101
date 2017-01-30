var http = require('http');
var fs = require("fs");
var apikey = '';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

function renderHomePage(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	var theHomePageHTML = fs.readFileSync('wiki.html');
	res.end(theHomePageHTML);
}

var server = http.createServer((req, res)=>{

	if(req.url === '/'){
		// cut and put in renderHomnePage()
		renderHomePage(req, res);
	}else if(req.url === '/styles.css'){
		var styles = fs.readFileSync('styles.css');
		res.writeHead(200,{'content-type':'text/css'});
		res.end(styles);
	}else if(req.url === '/stuff'){
		res.writeHead(403,{'content-type':'text/html'});
		res.end('You are forbidden to access this page.');
	}else if(req.url === '/api'){
		res.writeHead(400,{'content-type':'text/html'});
		res.end('Here is the api.');
	}else{
		res.writeHead(404, {'content-type':'text/html'});
		var the404HTML = fs.readFileSync('the404.html');
		res.end(the404HTML);
	}
});
var port = 8000;
server.listen(port);
console.log("Server is listening for HTTP traffic at port " + port +"...");