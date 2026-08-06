let buttonX = 200;
let buttonY = 150; 
let buttonWidth = 200; 
let buttonHeight = 80; 

function setup() {
  createCanvas(600, 400); 
  textAlign(CENTER, CENTER); 
  textSize(24); 
}

function draw() {
  background(240);

  
  let isMouseInside =
    mouseX > buttonX 
    mouseX < buttonX + buttonWidth 
    mouseY > buttonY 
    mouseY < buttonY + buttonHeight;


  if (isMouseInside && mouseIsPressed) {
    fill("#1e8449"); 
  } else if (isMouseInside) {
    fill("#2ecc71"); 
  } else {
    fill("#3498db"); 
  }

 
  noStroke();
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

  fill(255);
  text("START", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
}