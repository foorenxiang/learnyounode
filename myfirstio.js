// var fs = require('fs');
// var bufferobject = fs.readFileSync(process.argv[2]).toString();
// var countarray = [];
// counterarray = bufferobject.split("\n");
// console.log(counterarray.length-1);

var fs = require('fs');
console.log(fs.readFileSync(process.argv[2]).toString().split("\n").length-1);