// Composition C, Mondrian

function setup() {
  createCanvas(340, 340);
  strokeWeight(6);
  stroke(100);
  
  rectRed(3, 3, 170, 100);
  rectWhite(3, 100, 170, 40);
  rectYellow(3, 140, 70, 100);
  rectWhite(70, 140, 102, 100);
  
  rectWhite(175, 3, 150, 100);
  rectWhite(175, 100, 150, 40);
	rectBlue(175, 140, 100, 100);
  rectWhite(270, 140, 55, 100);
}

function rectRed(x, y, w, h){
	stroke(30);
  fill(255, 0, 0)
	rect(x, y, w, h);
}

function rectBlue(x, y, w, h){
	stroke(30);
  fill(0, 0, 255)
	rect(x, y, w, h);
}

function rectYellow(x, y, w, h){
	stroke(30);
  fill(255, 255, 0)
	rect(x, y, w, h);
}

function rectWhite(x, y, w, h){
	stroke(30);
  fill(255, 255, 255)
	rect(x, y, w, h);
}
