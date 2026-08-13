function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if ((frameCount % 60) < 30) {
    fill(255, 255, 0);
  } else {
    fill(80);
  }
  circle(width / 2, height / 2, 150);
}