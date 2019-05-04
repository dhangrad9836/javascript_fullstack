var array = ["Banana", "Apples", "Oranges", "Blueberries"];

//remove Banana from the array
array.shift();

//sort the array in order
array.sort();

//Put Kiwi at the end of the array
array.push("Kiwi");

//sort the array in reverse order
array.reverse();


//new array inside another array
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//access Oranges
array2[1][1][0];