var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html; Charset=UTF-8'});
	var myReadShorts = fs.createReadStream('../jd.html').pipe(res);
});

server.listen(3000, 'localhost');

