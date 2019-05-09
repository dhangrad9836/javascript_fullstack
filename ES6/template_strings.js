const name = "Sally";
const age = 34;
const pet = "horse";
//const greeting = "Hello " + name + "you seem to be doing " + greeting;

//template strings with backticks
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely 
${pet}  you have`;


//default arguments


//fat arrow funcitions
///old of writing function
functin add(a,b) {
	retunr a+b;
}

//new way
const add2 = (a,b) => a + b;