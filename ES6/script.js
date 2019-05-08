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

//ternary condition

//condition ? expres1 : expres2;

function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "access denied";

var automatedAnswer = 
	"your account # is " + ( isUserValid(false) ? "1234" : "not available");



// ternary function
function condition() {
	if (isUserValid(true)) {
		return "you may enter";
	} else {
		return "Access denied";
	}
}

var answer2 = condition();