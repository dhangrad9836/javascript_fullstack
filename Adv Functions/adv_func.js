//old way with functions
function first() {
	var greet = 'Hi';
	function second() {
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

//converted to es6
const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();


//closures = a function runs...a function executes and will never execute again
//it can be placed in a variable....the child scope has access to the parent scope


//currying
//the process of converting a function that takes multiple arguments
//into a function that takes them one at a time
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

//Compose
//The act of putting two function together to form a third function
// with output of one function as the input of the other function
const compose = (f , g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);









