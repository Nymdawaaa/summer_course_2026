let weather = "sunny";


let raindrops = [];
let snowflakes = [];

function setup() {
  createCanvas(600, 400);

 
  for (let i = 0; i < 100; i++) {
    raindrops.push({
      x: random(width),
      y: random(height),
      length: random(10, 20),
      speed: random(4, 8)
    });
  }

 
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: random(width),
      y: random(height),
      size: random(3, 7),
      speed: random(1, 3)
    });
  }
}

function draw() {
 
  if (weather === "sunny") {
    drawSunny();
  } else if (weather === "rainy") {
    drawRainy();
  } else if (weather === "snowy") {
    drawSnowy();
  } else if (weather === "night") {
    drawNight();
  }
}


function drawSunny() {
  background(135, 206, 235); 
  drawSun();
  drawCloud(100, 80, 50);
  drawCloud(350, 100, 60);
}

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  circle(100, 100, 80);
}


function drawRainy() {
  background(100, 110, 120); 
  drawCloud(150, 80, 70);
  drawCloud(300, 90, 80);
  drawRain();
}

function drawRain() {
  stroke(180, 200, 255);
  strokeWeight(2);
  
  
  for (let i = 0; i < raindrops.length; i++) {
    let drop = raindrops[i];
    line(drop.x, drop.y, drop.x, drop.y + drop.length);
    
    drop.y += drop.speed;
    if (drop.y > height) {
      drop.y = -drop.length;
      drop.x = random(width);
    }
  }
}


function drawSnowy() {
  background(200, 210, 220); 
  drawSnow();
}

function drawSnow() {
  fill(255);
  noStroke();
  
  
  for (let i = 0; i < snowflakes.length; i++) {
    let flake = snowflakes[i];
    circle(flake.x, flake.y, flake.size);
    
    flake.y += flake.speed;
    if (flake.y > height) {
      flake.y = -flake.size;
      flake.x = random(width);
    }
  }
}


function drawNight() {
  background(20, 24, 54); 
  
 
  fill(240, 240, 200);
  noStroke();
  circle(500, 80, 60);
  
 
  fill(255);
  circle(100, 50, 3);
  circle(200, 120, 4);
  circle(300, 40, 2);
  circle(420, 150, 3);
}


function drawCloud(x, y, size) {
  fill(255, 250);
  noStroke();
  circle(x, y, size);
  circle(x + size * 0.4, y - size * 0.2, size * 0.8);
  circle(x + size * 0.8, y, size * 0.7);
}


function changeWeather(val) {
  weather = val;
}