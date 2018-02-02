function setup() {
  createCanvas(340, 340);
	noStroke();
  
  rectYellow(3, 3, 100, 100);
  rectRed(3, 140, 70, 70);
	rectBlue(150, 100, 200, 200);
  rectRed(120, 40, 30, 30);
	rectBlack(200, 3, 50, 50);
  rectYellow(3, 260, 40, 40);
  rectBlack(100, 260, 20, 20);

}


function rectRed(x, y, w, h){
	noStroke();
  fill(255, 0, 0)
	rect(x, y, w, h);
}

function rectBlue(x, y, w, h){
	noStroke();
  fill(0, 0, 255)
	rect(x, y, w, h);
}

function rectYellow(x, y, w, h){
	noStroke(0);
  fill(255, 255, 0)
	rect(x, y, w, h);
}

function rectBlack(x, y, w, h){
	noStroke(0);
  fill(0, 0, 0)
	rect(x, y, w, h);
}
