// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArrays = [];
array.forEach(user => {
  //here we are taking the value out of user representing the array which we want is the username
  let {username} = user;
  username = username + "!";
  newArrays.push(username);
})

console.log(newArrays);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((user) => {
  let {username} = user;
  //username = username + "?";
  return username + "?";
});
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter((user) => {
  let {team} = user;
  //if team === "red";
  return user.team === "red";
});
console.log(filterArray);


//Find out the total score of all users using reduce
const total = array.reduce((accum, user) => {
  //let {score} = user;
  return accum + user.score;
}, 0);
console.log(total);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
