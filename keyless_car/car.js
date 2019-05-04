var age = Number(prompt("How old are you? "));

if (age < 18 ){
	alert("You are too young to drive....Powering Off");
}
else if (age === 18) {
	alert("Congratulations on your first year of driving!");
} else if (age > 18) {
	alert("enjoy the ride!");
}