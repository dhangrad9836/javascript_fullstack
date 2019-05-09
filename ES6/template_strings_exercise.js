// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//ES6
let a = 'test';
//let b = true;
const b = true;
cons c = 789;
a ='test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


//ES6 Destructuring
const { firstName, lastName, age, eyeColor } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//ES6 object property declartion
const a = 'test';
const b = true;
const c = 789;

const okObj = {
  a,
  b,
  c
}




// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//ES6 with backticks for template strings
const messageEs6 = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

//es6 Default Args
function isValidAge(age = 10) {
  return age
}

//or another way
const isValidAge = (age = 10) => age; 

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol('This is my first Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//es6
//const whereAmI = (username, Location) => ?"I am not lost" : "totally lost";

const whereAmI = (username, Location) => {
  if(username && Location) {
      return "I am not lost";
  } else {
      return "Totally lost";
  }
}