
let balls = [];

function setup() {

    createCanvas(600, 450);
}

function draw() {

    background(30);


    for (let ball of balls) {

        fill(ball.r, ball.g, ball.b);
        noStroke();


        circle(ball.x, ball.y, ball.size);


        ball.y = ball.y + ball.speed;


        if (ball.y > height) {
            ball.y = 0;
            ball.x = random(width);
        }
    }


    fill(255);
    textSize(18);
    text("Balls: " + balls.length, 20, 30);
}
function mousePressed() {

    balls.push({
        x: mouseX,
        y: mouseY,
        size: random(20, 50),
        speed: random(1, 5),
        r: random(255),
        g: random(255),
        b: random(255)
    });
}