const promise = new Promise((resolve, reject) => {
	if(true){
		resolve('Stuff Worked');
	} else {
		reject('Error, it broke')
	}
})


const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'HIII')
})


const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'POOKIE')
})


const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'IS IT ME YOU ARE LOOKING FOR')
})


Promise.all([promise, promise2, promise3, promise4])
	.then(values => {  	//return an array of promises
		console.log(values);
	})


promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('error!'))
	.then(result3 => {
		console.log(result3 + '!');
	})
	
	














/*el.addEventListener("click", submitForm);


//callback pyramid of doom
movePlayer(100, 'Left' function() {
	movePlayer(400, 'Left' function() {
		movePlayer(10, 'Right' function() {
			movePlayer(330, 'Left' function() {
			});
		});
	});
});



//reconstructed in with promises
movePlayer(100, 'Left')
	.then(() => movePlayer(400, 'Left'))
	.then(() => movePlayer(10, 'Right'))
	.then(() => movePlayer(330, 'Left'))
*/