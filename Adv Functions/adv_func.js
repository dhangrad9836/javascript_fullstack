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