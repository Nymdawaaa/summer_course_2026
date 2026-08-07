function setup() {
    createCanvas(600, 400)
}
function draw() {
    stroke("#222222")
    noStroke()

    for (let i = 0; i < 6; i++) {
        let x = 50
        let y = 100 + i * 35
       rect (x, y, 12, 12)
       fill ("#222222")
    }
}