var fs = require("fs");

module.exports = function(dirname, ext, callback){
	var buffer = [];
	ext = "." + ext;

	fs.readdir(dirname, function(err, list){
		if (err)
			return callback(err);

		buffer = list.filter(function(value, index, array){
			return value.includes(ext);
		});

		return callback(null, buffer);
	});

	//do not put code here, since this is a asynchrous function
};