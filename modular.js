var mymodule = require("./mymodule");

var dirname = process.argv[2];
var ext = process.argv[3];

function callback(err, list){
	if(err)
		throw err;
	
	list.forEach(function(element){
		console.log(element);
	})

	return list;
}

mymodule(dirname, ext, callback);