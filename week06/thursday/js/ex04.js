function setup() {
    createCanvas(800, 400)
}
function draw() {
    background(220)
    let centerY = height / 2
    let speed = 0.5
    let amplitude = 50

    for (let i = 0; i < 10; i++){
    let x = (i + 1) * (width / 11);
    let y = centerY + sin(frameCount * speed + i) * amplitude;
    fill(i * 25, 100, 200)
    circle(x, y, 40)
    }
}