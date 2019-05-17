//string padding
'Dog'.padStart(10);
'Dog'.padEnd(10);


//Object keys....old method
//Object value
//Object entries

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr Grinch'
}


//object keys
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

//object values
Object.values(obj).forEach(value => {
	console.log(value);
})


//object entries
Object.entries(obj).forEach(value => {
	console.log(value);
})



//example of using entries to replace username0 with a real username
Object.entries(obj).map(value=> {
	//the return below here of [1] is going to return the second value first
	return value[1] + value[0].replace('username', '');
})
//output; ["Santa0", "Rudolf1", "Mr Grinch2"]
//note that when we replace username and kept the number it added the number 
//to the end of the value










