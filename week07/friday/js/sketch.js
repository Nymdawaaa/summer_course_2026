
let score = 0;
let lives = 3;
let targetX;
let targetY;
let targetSize = 80;
let gameState = "waiting";


let scoreElement;
let livesElement;
let difficultySelect;
let startButton;
let resetButton;

function setup() {

    const canvas = createCanvas(600, 400);
    canvas.parent("canvas-container");


    scoreElement = document.querySelector("#score-value");
    livesElement = document.querySelector("#lives-value");
    difficultySelect = document.querySelector("#difficulty-select");
    startButton = document.querySelector("#start-button");
    resetButton = document.querySelector("#reset-button");


    startButton.addEventListener("click", startGame);
    resetButton.addEventListener("click", resetGame);
}


function startGame() {
    score = 0;
    lives = 3;
    gameState = "playing";

    updateDifficulty();
    resetTargetPosition();
    updateDOM();
}


function updateDifficulty() {
    const level = difficultySelect.value;
    if (level === "easy") {
        targetSize = 100;
    } else if (level === "medium") {
        targetSize = 70;
    } else if (level === "hard") {
        targetSize = 45;
    }
}

function resetTargetPosition() {
    const radius = targetSize / 2;
    targetX = random(radius, width - radius);
    targetY = random(radius, height - radius);
}


function updateDOM() {
    scoreElement.textContent = score;
    livesElement.textContent = lives;
}


function draw() {
    background(220);

    if (gameState === "waiting") {
        textAlign(CENTER, CENTER);
        textSize(24);
        fill(50);
        text("Press Start to Begin!", width / 2, height / 2);
    } else if (gameState === "playing") {

        fill(255, 50, 50);
        ellipse(targetX, targetY, targetSize);
    } else if (gameState === "gameOver") {
        textAlign(CENTER, CENTER);
        textSize(28);
        fill(200, 0, 0);
        text("GAME OVER", width / 2, height / 2 - 20);
        textSize(20);
        fill(50);
        text("Final Score: " + score, width / 2, height / 2 + 20);
    }
}


function mousePressed() {
    if (gameState !== "playing") {
        return;
    }


    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        let distanceToTarget = dist(mouseX, mouseY, targetX, targetY);

        if (distanceToTarget < targetSize / 2) {

            score += 1;
            updateDifficulty();
            resetTargetPosition();
        } else {

            lives -= 1;
            if (lives <= 0) {
                gameState = "gameOver";
            }
        }
        updateDOM();
    }
}


function resetGame() {
    score = 0;
    lives = 3;
    gameState = "waiting";
    difficultySelect.value = "easy";
    updateDOM();
}