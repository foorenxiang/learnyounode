var sum = 0;

for(var i = 2; i<process.argv.length; i++)
	sum+=parseInt(process.argv[i]);

console.log(sum);

// var myArgs = process.argv.slice(2);
// total = 0;
// for(var i in myArgs)
// {
// total += +(myArgs[i]);
// }
// console.log(total)