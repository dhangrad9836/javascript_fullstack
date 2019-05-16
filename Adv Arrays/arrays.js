//Advanced arrays

const array = [1,2,10,16];

//you need this empty array to store/push the contents from the forEach....
//similar to how we do it in python with append
const double = []

const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(newArray);