function setup() {
  createCanvas(340, 340);
}

function draw() {
  lineBlue();
  lineRed();
	lineOrange();
  lineDarkBlue();
}

function lineBlue() {
  stroke(0, 255, 255);
  line(30, random(height), 30, random(height));
}

function lineRed() {
  stroke(232, 30, 0);
  line(100, random(height), 100, random(height));
}

function lineOrange() {
  stroke(230, 130, 0);
  line(150, random(height), 150, random(height));
}

function lineDarkBlue() {
  stroke(20, 10, 150);
  line(200, random(height), 200, random(height));
}
