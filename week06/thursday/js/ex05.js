function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(30);
  let centerX = width / 2;
  let centerY = height / 2;
  let sunSize = 80;
  let orbitRadius = 150;
  let angle = frameCount * 0.02;

  let x = centerX + cos(angle) * orbitRadius;
  let y = centerY + sin(angle) * orbitRadius;

  noFill();
  stroke(100);
  ellipse(centerX, centerY, orbitRadius * 2);

  noStroke();
  fill(255, 204, 0);
  circle(centerX, centerY, sunSize);

  fill(0, 150, 255);
  circle(x, y, 30);
}