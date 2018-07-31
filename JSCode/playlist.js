var drink = "shekaka";
var lyrics = "";
var cans = 3;
while(cans > 0) {
	lyrics = lyrics + cans + " can of " + drink + " on the wall <br>";
	if (cans > 1) {
		lyrics = lyrics + (cans-1) + " cans of " + drink + " on the wall <br>";
	}
	else {
		lyrics = lyrics + "No more cans of " + drink + " on the wall <br>";
	}
	cans = cans -1;
}
abc
document.write(lyrics);