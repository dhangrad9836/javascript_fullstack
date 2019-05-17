//reference types

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};



//context vs scope
//note that 'this' is part of the current object that it lives in
//ie: if you are creating an object let's say a car and you create a constructor; 
//when you add values ex: for the color you would validate it with this.color = color;
//the this.color refers to the current object of the car.
function a() {
	console.log(this);
}
a(); //this will just refer to the window object because a new object has not been created
//so the default object is the window object

const object4 = {
	a: function() {
		console.log(this);
	}
}


//instantiation

class Player {
	constructor(name, type) {
		console.log('player',this); 	//this is for testing purposes
		this.name = name;
		this.type = type;
	}
	//create introduce method and use above constructor properties
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}

}


//here we are creating a wizard player....note the words wizard "player"
//so we will use the properties from the Player class by extending it and adding to our Wizard
class Wizard extends Player {
	constructor(name, type) {
		super(name, type) //note whenever you use extends from another class you 
		console.log('wizard',this) //must use super in order to extend from another class	
	}
	//now within our wizard we want to have a play function
	play() {
		console.log(`WEEEEEEEE I'm a ${this.type}`)
	}
}

//create wizard objects
const wizard1 = new Wizard('Shelley', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');















