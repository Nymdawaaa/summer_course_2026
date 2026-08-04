function setup() {
    createCanvas(400, 400)
}
function draw() {
    background(240)
    fill(255, 195, 45)
    noStroke()
    ellipse(200, 200, 220, 220)



    stroke(100, 50, 10)
    strokeWeight(12)
    noFill()



    arc(150, 180, 40, 60, PI, TWO_PI)
    arc(250, 180, 40, 60, PI, TWO_PI)




    strokeWeight(9)
    arc(200, 210, 120, 100, 0, PI)

}