var drink = "Saya";
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
	//alert("cans = "+cans);
	//document.write("asdasd" + "<br>");
}

document.write(lyrics);

var boneus = 43*15*0.1;
document.writeln(boneus);
document.write("</br>");
document.write("<br>");
document.writeln(boneus);