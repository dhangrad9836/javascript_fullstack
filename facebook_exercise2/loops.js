/*var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["abracacabra", "shazam", "boo"],
	shout: function() {
		console.log("AHHHHHHH!");	//remember this function is acutally a method
	}								//so a function inside a object is its methods
}

//here we have objects inside an array
var list = [
	
	{
		username: "andy",
		password: "secre"
	},

	{	
		username: "jess",
		password: "123"
	}

];*/

//Objectes exercises

//1. create an object that has properties "username" and "password". Fill
//in those values with strings

var database = [
	
	{	
		username: "darren",
		password: "1234"
	},

	{
		username: "myName",
		password: "pass1234"
	},

	{	
		username: "sally",
		password: "123"
	},

	{
		username: "ingrid",
		password: "777"
	}


];

//2. Create an array which contains the object above and name the array database
//add the contents of the object
/*var database = [
	
	{	
		username: "darren",
		password: "1234"
	},

	{
		username: "myName",
		password: "pass1234"
	}


];*/


//Create an array called "newsfeed" which contains 3 objects with properties
// "username" and "timeline"  .......objects inside an array

var newsfeed = [

	{
		username: "name1234",
		timeline: "Just checking in"
	},

	{
		username: "1234name",
		timeline: "another check in"
	},

	{
		username: "34name3333",
		timeline: "Checking in again"
	},


];

//check username and password
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

//create a function to first validate username and password with using
//return true or return false
function isUserValid(username, password){
	for(var i=0; i<database.length; i++) {
		if (database[i].username === username && database[0].password === password){
			return true;
		}
	}
	//outside of for loop to return false
	return false;
}

//create a signin function
function signIn(username, password) {
	//call function isUserValid
	if (isUserValid(username, password)) { 
		console.log(newsfeed);
}	else {
	alert("Sorry, wrong username and or password!")
	}
}

//call signIn function
signIn(userNamePrompt, passwordPrompt);














