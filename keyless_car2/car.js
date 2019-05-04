//check driver age using function declaration
function checkDriverAge(age) {
	
	if (age < 18) {
		return alert("Sorry too young");
	} else if (age > 18) {
		return alert("Powering on. Enjoy the ride");
	} else if (age === 18) {
		return alert("Congratulations on your first year of driving.");
	}
}

//call checkDriverAge
checkDriverAge(15);


///using variable expression
var checkAge = function(age_check) {
 	if (age_check < 18) {
		return alert("Sorry too young");
	} else if (age_check > 18) {
		return alert("Powering on. Enjoy the ride");
	} else if (age_check === 18) {
		return alert("Congratulations on your first year of driving.");
	}		
}

checkAge(19);