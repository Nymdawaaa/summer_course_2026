let size = 50
let spacing = 20
function setup() {
    createCanvas(700, 700)
}
function draw() {
    background(220)
    fill(248, 216, 56)
    rect(50, 100, size, size)
    rect(50+size+spacing, 100, size, size)
    rect(50+(size+spacing)*2, 100, size, size)
    rect(500, 100, size, size)
}