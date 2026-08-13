let snowflakes = [];

function setup() {
  createCanvas(600, 450);
  
  for (let i = 0; i < 40; i++) {
    let sz = random(3, 10);
    let sp = map(sz, 3, 10, 0.5, 2.5);

    snowflakes.push({
      x: random(width),
      y: random(height),
      size: sz,
      speed: sp,
      drift: random(-0.5, 0.5)
    });
  }
}

function draw() {
  background(10, 20, 50);

  for (let s of snowflakes) {
    fill(255);
    noStroke();
    ellipse(s.x, s.y, s.size);

    s.y += s.speed;
    s.x += s.drift;

    if (s.y > height) {
      s.y = 0;
      s.x = random(width);
    }
  }
}