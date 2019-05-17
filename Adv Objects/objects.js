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


