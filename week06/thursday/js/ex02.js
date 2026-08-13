function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
  let size = 100 + sin(frameCount * 0.05) * 50;
  let r = 127 + sin(frameCount * 0.05) * 127;
  fill(r, 100, 200);
  circle(width / 2, height / 2, size);
}