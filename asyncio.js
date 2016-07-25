// var fs = require("fs");
// fs.readFile(process.argv[2], "utf8", function(err, data){
// 	var array = data.split("\n");
// 	console.log(array.length-1);
// });

var fs = require("fs");
fs.readFile(process.argv[2], "utf8", function(err, data){console.log(data.split("\n").length-1);
});