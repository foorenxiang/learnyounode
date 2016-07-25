var http = require("http");

var urlLoc = [process.argv[2], process.argv[3], process.argv[4]];
var stringbuff1 = "";
var stringbuff2 = "";
var stringbuff3 = "";
var count = 0;
//server 1
http.get(urlLoc[0], function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		stringbuff1 += data;
	});
	response.on("error", function(error){
		throw error;
	});
	response.on("end", function(end){
		count++;
		if(count==3){
			console.log(stringbuff1);
			console.log(stringbuff2);
			console.log(stringbuff3);
		};
	});
});

http.get(urlLoc[1], function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		stringbuff2 += data;
	});
	response.on("error", function(error){
		throw error;
	});
	response.on("end", function(end){
		count++;
		if(count==3){
			console.log(stringbuff1);
			console.log(stringbuff2);
			console.log(stringbuff3);
		};
	});
});

http.get(urlLoc[2], function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		stringbuff3 += data;
	});
	response.on("error", function(error){
		throw error;
	});
	response.on("end", function(end){
		count++;
		if(count==3){
			console.log(stringbuff1);
			console.log(stringbuff2);
			console.log(stringbuff3);
		};
	});
});