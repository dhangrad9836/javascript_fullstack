/*//Two types of functions
//1 Declarative function
function sayHello() {
	console.log("Hello!");
}

//call function sayHello()
//open up developer console to see the Hello
sayHello();

//function two: function expression
//this is also called an anonymous function
var sayBye = function() {
	console.log("Bye");
}

//call sayBye function
sayBye();


//
function sing() {
	console.log("AHHHHHHHHHH");
	console.log("TEEEEEEEEEEE");
}

sing();

function singSong(song) {
	console.log(song)
}

singSong("Ladd dee daaa");
singSong("Helloooo");
singSong("Backstreet back alright");
*/

//function multiply
function multiply(a , b) {
	if (a > 10 || b > 10)
	return "that's too hard";
 	else {
	return a*b;
	}

}

multiply(5 , 10);