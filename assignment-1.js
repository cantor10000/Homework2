function repeat(total) {
  var count = 0;
  while (count < total) {
    line(random(width), random(height), random(width), random(height));
    count = count + 1;
  }
}
repeat(10);
