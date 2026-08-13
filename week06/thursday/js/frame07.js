function setup() {
    createCanvas(400, 400)

}
function draw() {
    background(20)

    //nar
    fill(255, 200, 0)
    circle(200, 200, 40)


    //mercury - hurdan jijig
    let a1 = frameCount * 0.05
    circle(200 + cos(a1) * 80, 200 + sin(a1) * 80, 15)


    //venus - udaan tom
    let a2 = frameCount * 0.02
    fill(100, 200, 255)
    circle(200 + cos(a2) * 140, 200 + sin(a2) * 140, 25)


    //earth
    let a3 = frameCount * 0.01
    fill(0, 200, 255)
    circle(200 + cos(a3) * 200, 200 + sin(a3) * 200, 30)
}