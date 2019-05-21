const basket = ['apples', 'oranges', 'grapes'];

//object for the for in loop
const detailedBasket = {
	apples: 4,
	oranges: 10,
	grapes: 1000
}


//1
for (let i = 0; i<basket.length; i++) {
	console.log(basket[i]);
}

//2 
basket.forEach(item => {
	console.log(item);
})

//for of loop
//this is for iterating
for(item of basket) {
	console.log(item);
}

//for in loop works with objects
//and allow us to see the objects properties
//this is for enumerating
for (item in detailedBasket) {
	console.log(item);
}