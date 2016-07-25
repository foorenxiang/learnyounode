var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	// console.log(typeof req);
	fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(process.argv[2]);

// var http = require('http'),
//     fs = require('fs'),
//     port = process.argv[2],
//     path = process.argv[3];

// var server = http.createServer(function(request, response){
//     var file = fs.createReadStream(path);
//     file.pipe(response);
// });

// server.listen(port);