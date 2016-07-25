// var net = require("net");
// var date = new Date();

// var datestring = "";

// var logdate = function(){
// 	datestring += date.getFullYear() + "-";
// 	if(date.getMonth()<10)
// 		datestring += "0" + (date.getMonth() + 1) + "-";
// 	else
// 		datestring += (date.getMonth() + 1) + "-";
// 	datestring += date.getDate() + " ";
// 	if(date.getHours()<10)
// 		datestring += "0" + date.getHours() + ":";
// 	else 
// 		datestring += date.getHours() + ":";
// 	datestring += date.getMinutes() + "\n";
// 	return datestring;
// }


// function listener(socket){
// 	//YYYY-MM-DD hh:mm
// 	socket.end(logdate());
// };

// var server = net.createServer(listener);

// server.listen(process.argv[2]);

var net = require("net");

var logdate = function(){
	var date = new Date();
	return date.getFullYear() 
	+ "-" 
	+ zeroFill(date.getMonth() + 1) 
	+ "-"
	+ zeroFill(date.getDate())
	+ " "
	+ zeroFill(date.getHours())
	+ ":"
	+ zeroFill(date.getMinutes())
	+ "\n";
}

function zeroFill(num){
	if (num<10)
		return "0" + num;
	else
		return num;
}

function listener(socket){
	socket.end(logdate());
};

var server = net.createServer(listener);

server.listen(process.argv[2]);