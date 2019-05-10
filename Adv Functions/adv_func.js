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


//closures