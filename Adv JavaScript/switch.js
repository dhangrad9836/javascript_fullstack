function moveCommand(direction) {
	var whatHappened;
	switch (direction) {
		case "forward":
			whatHappened = "You encountered a monster";
			break;
		case "forward":
			whatHappened = "You encountered a home";
			break;
		case "right":
			whatHappened = "You found a river";
			break;
		case "left":
			whatHappened = "You found a troll";
			break;
		default:
			whatHappened = "please enter a valid direction"
		
		}
	return whatHappened;
}