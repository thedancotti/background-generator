var css = document.querySelector("h3");
var colorInput1 = document.querySelector(".color1");
var color1 = "#ff0000";
var colorInput2 = document.querySelector(".color2");
var color2 = "#ffff00";
var body = document.querySelector("body");
var randomBtn = document.querySelector(".randomBtn");

function setGradient(color1, color2) {
	colorInput1.value = color1;
	colorInput2.value = color2;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1
	+ ", " 
	+ color2 
	+ ")";
	css.textContent = body.style.background + ";";
}

function generateRandomColor() {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setRandomGradient() {
	var newColor1 = generateRandomColor();
	var newColor2 = generateRandomColor();
	setGradient(newColor1, newColor2);
}

function changeColorInput(){
	setGradient(colorInput1.value, colorInput2.value);
}

setGradient(color1, color2);

colorInput1.addEventListener("input", changeColorInput);
colorInput2.addEventListener("input", changeColorInput);
randomBtn.addEventListener("click", setRandomGradient);
