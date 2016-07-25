var http = require("http");

var urlLoc = process.argv[2];
var stringbuff = "";

http.get(urlLoc, function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		stringbuff += data;
	});
	response.on("error", function(error){
		throw error;
	});
	response.on("end", function(end){
		console.log(stringbuff.length);
		console.log(stringbuff);
	});
});