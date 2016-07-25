// var fs = require("fs");
// var path = process.argv[2];
// var filetype = process.argv[3];
// fs.readdir(process.argv[2], function(err, list){
// 	list = list.filter(function(value, index, array){
// 		if(value.includes("." + filetype)){
// 			console.log(value);
// 			return true;
// 		}
// 		else
// 			return false;
// 	});
// });

// var fs = require("fs");
// fs.readdir(process.argv[2], function(err, list){
// 	if (err)
// 		throw err;
// 	list = list.filter(function(value, index, array){
// 		if(value.includes("." + process.argv[3])){
// 			console.log(value);
// 			return true;
// 		}
// 		else
// 			return false;
// 	});
// 	return list;
// });

//official solution
var fs = require("fs");
var path = require("path");
var folder = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(folder, function(err, files){
	if (err)
		return console.error(err);
	files.forEach(function(file){
		if(path.extname(file) === ext){
			console.log(file)
		}
	})
})


