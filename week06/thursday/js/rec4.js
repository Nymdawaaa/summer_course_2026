let cars = [];

function setup() {
  createCanvas(700, 450);

  let startY = 220;
  let gap = 40;

  for (let i = 0; i < 5; i++) {
    let car = {
      x: random(-100, 0),
      y: startY + i * gap,
      speed: random(2, 6),
      width: random(60, 90),
      r: random(50, 255),
      g: random(50, 255),
      b: random(50, 255)
    };
    cars.push(car);
  }
}

function draw() {
  background(220);

  fill(135, 206, 235);
  rect(0, 0, width, 180);

  fill(34, 139, 34);
  rect(0, 180, width, 20);
  rect(0, 420, width, 30);

  fill(60);
  rect(0, 200, width, 220);

  stroke(255);
  strokeWeight(3);
  for (let lineX = 0; lineX < width; lineX += 40) {
    line(lineX, 310, lineX + 20, 310);
  }
  noStroke();

  for (let car of cars) {
    fill(car.r, car.g, car.b);
    rect(car.x, car.y, car.width, 25, 5);

    fill(0);
    circle(car.x + 15, car.y + 25, 12);
    circle(car.x + car.width - 15, car.y + 25, 12);

    car.x += car.speed;

    if (car.x > width) {
      car.x = -car.width;
      car.speed = random(2, 6);
      car.r = random(50, 255);
      car.g = random(50, 255);
      car.b = random(50, 255);
    }
  }
}