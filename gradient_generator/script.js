//step1 grab values from querySelectors
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

//testing using console.log
//console.log(body);
//body.style.background = "red";

//step2 listen to events from input
//this shows from the colorpicker the color values
//from color1.value and color2.value
/*color1.addEventListener("input", function(){
	console.log(color1.value);
})

color2.addEventListener("input", function(){
	console.log(color2.value);
})*/

//step3 we will change from step two the console.log 
//inside the function below to dynamically change the 
//background w/o refactoring into a function setGradient n step4
/*color1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
})

color2.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
})
*/

//step 4 refactor out code to prevent dry
color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	//add css text to bottom of color picker dynamically using css.textContent
	css.textContent = body.style.background + ";";
}