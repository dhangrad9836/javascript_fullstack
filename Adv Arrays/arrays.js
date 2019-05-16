//Advanced arrays

const array = [1,2,10,16];

//you need this empty array to store/push the contents from the forEach....
//similar to how we do it in python with append
const double = []

const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);

///important methods for arrays
//map, filter, reduce

//map transforms the mapArray variable to an array
//and because using .map you always have add a return statement when using map
const mapArray = array.map((num) => {
	return num * 2;
});

console.log('map', mapArray);


//filter allows you to use a condition and you must also use a return statement
const filterArray = array.filter(num => {
	return num  == 5
});
console.log('filter', filterArray);



//reduce
//with reduce you have 2 paramaters and the first one is an accumulator
//the accumulator is a num that you can designate where to start from
//here we are starting from 5

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 5);

console.log('reduce', reduceArray)

















