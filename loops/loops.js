//todo list
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

//second array with exclamation mark
var todosImportant = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];

/*
for (var i=0; i < todos.length; i++) {
	todos[i] = todos[i] + "!!";
}*/

//takes the total length of todos array and adds it to todosLength 
//append todos.length todosLength
var todosLength = todos.length;
for (var i=0; i<todosLength; i++) {
	console.log(todos[i]);
}


//while loop
var counterOne = 10;
while (counterOne > 10) {
	console.log("while",counterOne);
	//counterOne++; //displays 0 - 9
	counterOne--; //displays countdown 10 - 1
}


//do while loop

var counterTwo = 10;
do {
	console.log("do while",counterTwo);
	counterTwo--;
} while(counterTwo > 10);



//forEach loop
todos.forEach(function(i, index) {
	console.log(i + " Ok", index);
})

//make a logTodos function that will display contents in console
//display value and index
function logTodos(todo, i) {
	console.log(todo, i);
}

//make a forEach loop to loop through arrays
//this will loop through both arrays todos and todosImportant
todos.forEach(logTodos);
todosImportant.forEach(logTodos);







