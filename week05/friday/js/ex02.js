let lightColor = "#555555";
let roomColor = "#222222";
function setup() {
    createCanvas(600, 400)
}
function draw() {
    if (mouseIsPressed){
        roomColor = "#fff3b0"
        lightColor = "#ffd60a"
    }
    else {
        roomColor = "#222222"
        lightColor = "#555555"
    }

    background(roomColor)
   fill (0, 0, 255)
   ellipse (300, 200, 50, 60)
}