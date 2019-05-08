/*//let and const to declare variables

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	//accessing experience inside if statement
	console.log('inside', wizardLevel);
}

//accessed experience outside if statment
console.log('outside', wizardLevel);



//creating object using const
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}
*/


//destructuring 
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

//old way
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//destructuring way
const { player, experience} = obj;
let { wizardLevel } = obj;



////////////////////////////////////////////////////
//declaring object properties
const name = 'john snow';

const obj = {
	[name]: 'hello',
	['ray' + 'smith']: 'hihi'
}


///////////////////////////////////////////

const a = "Simon";
const b = true;
const c = {};

const obj = {a,b,c}
















