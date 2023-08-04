



let bubbles= []
let bubble2;
let bubble1;
let bubble;
function setup() {
    createCanvas(windowWidth, windowHeight);

    let amountOfRed = random(0, 255);
    let amountOfBlue = random(0, 255);
    let amountOfGreen = random(0, 255);
     bubble1 = new Bubble(random(0, 600), random(0, 400),40, 255, 255, 255);
     bubble2 = new Bubble(random(0, 600), random(0, 400),40, amountOfRed, amountOfBlue, amountOfGreen);
//    bubbleArray.push(bubble1, bubble2);

    for (let i = 0; i < 140; i++){
        let amountOfRed = random(0, 255);
        let amountOfBlue = random(0, 255);
        let amountOfGreen = random(0,255);
        bubble = new Bubble(random(0, windowWidth), random(0, windowHeight),  20, amountOfRed, amountOfBlue, amountOfGreen);

        bubbles.push(bubble);
    }


}

function draw() {

    background(255);

   
 
       
        for (b of bubbles) {
            {
                b.show();
                b.move();
                let overLapping = false;
                for (other of bubbles) {
                    if (b !== other && b.intersects(other)) {
                        overLapping = true;
                    
                    }
                }
                if (overLapping) {
                    b.changeColor(255);
                
                } else {
                    b.changeColor(0);
                }
            }
    }

}


class Bubble {
    constructor(xPostition, yPosition, radius, amountOfRed, amountOfBlue, amountOfGreen) {

        this.x = xPostition,
            this.y = yPosition,
            this.r = radius,
            this.amountOfRed = amountOfRed,
            this.amountOfBlue = amountOfBlue,
            this.amountOfGreen = amountOfGreen,
            this.brightness = 0
    }
    move() {
        this.x = this.x + random(-5, 5)
        this.y = this.y + random(-5, 5)

    }
    changeColor(level) {
        this.brightness = level;
        this.amountOfRed = level;
        //this.amountOfBlue = level
        //this.amountOfGreen = level
    }
    clicked(px, py) {

        let distance = dist(px, py, this.x, this.y);
        if (distance < this.r) {
            return true;

        }
        else {
            return false;
        }

    }
    intersects(other) {

        let distance = dist(this.x, this.y, other.x, other.y);
        if (distance < this.r + other.r) {
            return true;

        } else {
            return false;
        }
    }
    show() {
        stroke(150);
        //noStroke();
        let r = this.amountOfRed
        let g = this.amountOfBlue
        let b = this.amountOfGreen
        fill(r, b, g);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}