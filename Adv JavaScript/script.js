var fun = 5;

function funFunction() {
	//child scope
	var fun = "helllo";
	console.log(1, fun);
}

function funerFunction() {
	//child scope
	var fun = " bye";
	console.log(2, fun);
}


function funestFunction() {
	//child scope
	fun = " aAHHH";
	console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();