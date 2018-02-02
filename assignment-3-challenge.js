background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(360), 255, 255);
  //beginShape();
  //vertex(20, 20);
  //vertex(40, 20);
  //vertex(40, 40);
  //vertex(60, 40);
  //vertex(60, 60);
  //vertex(20, 60);
  //endShape(CLOSE);
	beginShape();
  vertex(random(width), random(height));
  vertex(40, 20);
  vertex(random(width), random(height));
  vertex(60, 40);
  vertex(random(width), random(height));
  vertex(20, 60);
  endShape(CLOSE);
}
