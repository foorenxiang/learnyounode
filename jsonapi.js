var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){

	//create object from url
	var reqbuffer = url.parse(req.url, true); 
	
	//only run if request method is GET
	if(req.method === "GET"){

		res.writeHead(200, {
		 'Content-Type': 'application/json' 
		});

		// console.log(reqbuffer);

		//endpoint 1: /api/parsetime
		if(reqbuffer.pathname == "/api/parsetime"){
			
			// var returnobject = {
		 //       // "hour": reqbuffer.query.iso.substring(11,13),
		 //       	"hour" : Number(reqbuffer.query.iso.substring(11,13))-4,
   //     			"minute": Number(reqbuffer.query.iso.substring(14,16)),
   //     			"second": Number(reqbuffer.query.iso.substring(17,19))
			// }
			
			var date = new Date(reqbuffer.query.iso);

			var returnobject = {
		       // "hour": reqbuffer.query.iso.substring(11,13),
		       	"hour" : date.getHours(),
       			"minute": date.getMinutes(),
       			"second": date.getSeconds()
			}
			res.end(JSON.stringify(returnobject));

		}

		//endpoint 2: /api/unixtime
		if(reqbuffer.pathname == "/api/unixtime"){
			//create date object
			var date = new Date(reqbuffer.query.iso);

			
			var returnobject = {
				"unixtime" : date.getTime()
			}

			res.end(JSON.stringify(returnobject));
		}

	}

});

//setup server port listen
server.listen(process.argv[2]);