let targetX = 100; 
let targetY = 200; 
let targetSize = 70; 
let targetSpeed = 4; 
let score = 0; 
let lives = 3;
let gameState = "playing"; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  if (gameState === "playing") {
    
    targetX += targetSpeed;

    if (targetX > width - targetSize / 2 || targetX < targetSize / 2) {
      targetSpeed *= -1;
    }

    
    fill("#e74c3c");
    noStroke();
    circle(targetX, targetY, targetSize);
  } else if (gameState === "gameOver") {
   
    fill(255, 0, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    textSize(16);
    fill(100);
    text("Double click to restart", width / 2, height / 2 + 40);
  }

  
  fill(0);
  textSize(18);
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);
  text("Lives: " + lives, 20, 45);
}

function mousePressed() {
  if (gameState === "playing") {
    let d = dist(mouseX, mouseY, targetX, targetY);

    if (d < targetSize / 2) {
      score++; 
      if (targetSpeed > 0) targetSpeed += 0.5; 
      else targetSpeed -= 0.5;
      targetY = random(targetSize / 2, height - targetSize / 2);
    } else {
      lives--; 
      if (lives <= 0) {
        gameState = "gameOver"; 
      }
    }
  }
}

function doubleClicked() {
 
  targetX = 100;
  targetY = 200;
  targetSpeed = 4;
  score = 0;
  lives = 3;
  gameState = "playing";
}