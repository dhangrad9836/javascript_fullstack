/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("Click!!!!!");
})*/

//1 we need to select the input from the input box and the button
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
//we need to querySelect the ul tag and use this to append to the end of the list
var ul = document.querySelector("ul");

//toggle the done class to put a strikethrough the list item
//var doneItem = document.querySelector("li").classList.toggle("done");

//extracted out code into function called inputLength
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.toggle("done");
	//we can now use the ul and append the li here
	//note that it's the variable li and not the tag "li"
	ul.appendChild(li);
	
	//clear the text box after pressing enter button with empty string
	input.value = "";
}

function addListAfterClick() {
		//conditional to verify if input box is not empty 
	if (inputLength() > 0){
	//we need to create and element li here
	createListElement();
	}

}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13){ 
	createListElement();	
	}
}


//add event listener to the button
button.addEventListener("click", addListAfterClick);


//create script for enter button so you can press enter too
//add event listener to the button using the input variable instead of button
//and use keypress and not click for the eventlistener param
input.addEventListener("keypress", addListAfterKeypress);
	//conditional to verify if input box is not empty and listen if 
	//keycode 13 is pressed which is the enter button