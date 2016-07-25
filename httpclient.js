// var http = require("http");

// var urlLoc = process.argv[2];

// http.get(urlLoc, function(response){

// 	response.on("data", function(data){
// 		var buffer = "";
// 		buffer += data.toString();
// 		console.log(buffer);
// 	});

// 	response.on("error", function(error){
// 		throw error;
// 	});

// 	response.on("end", function(end){
// 		return true;
// 	});
// });

var http = require("http");

var urlLoc = process.argv[2];

http.get(urlLoc, function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		console.log(data);
	});

	response.on("error", function(error){
		throw error;
	});

	response.on("end", function(end){
		return true;
	});
});
