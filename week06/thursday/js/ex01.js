function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(220);
  let x = frameCount % width;
  let y = height / 2;
  fill(0, 102, 153);
  circle(x, y, 60);
}