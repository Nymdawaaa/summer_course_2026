let warningDistance = 70
function setup() {
    createCanvas(600,400)
    noStroke()
}
function draw() {
    background(220)
if (mouseX < warningDistance || mouseX > width - warningDistance){
   fill ("#e74c3c")
}
else {
    fill ("#3498db")

}
circle (mouseX, mouseY, 70)
}