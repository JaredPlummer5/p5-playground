let bubble1;

let bubble2;
let bubbleArray = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 500; i++){
        let amountOfRed = random(0, 255);
        let amountOfBlue = random(0, 255);
        let amountOfGreen = random(0,255);
        bubble1 = new Bubble(windowWidth/2, windowHeight/2, random(10, 20), amountOfRed, amountOfBlue, amountOfGreen);

        bubbleArray.push(bubble1);
    }

 
}




function draw() {
    background(0);

    for (let i = 0; i < bubbleArray.length; i++) {


        bubbleArray[i].show()
        bubbleArray[i].move()
        let bubbleWasClicked = bubbleArray[i].clicked(mouseX, mouseY);
        if (bubbleWasClicked) {
            bubbleArray[i].changeColor();
        }

    }


}

function mouseDragged() {
    for (let i = 0; i < bubbleArray.length; i++) {
        let bubbleWasClicked = bubbleArray[i].clicked(mouseX, mouseY);
        if (bubbleWasClicked) {
            bubbleArray.splice(i,1)
        }

    }

    
    // let amountOfRed = random(0, 255);
    // let amountOfBlue = random(0, 255);
    // let amountOfGreen = random(0, 255);
    // let newBubble = new Bubble(mouseX, mouseY, random(10, 20), amountOfRed, amountOfBlue, amountOfGreen);

    // bubbleArray.push(newBubble);
}


// function mousePressed() {
//     for (let i = 0; i < bubbleArray.length; i++) {
//         let bubbleWasClicked = bubbleArray[i].clicked(mouseX, mouseY);
//         if (bubbleWasClicked) {
//             bubbleArray[i].changeColor();
//         }
//     }
// }
function mouseClicked() {

    for (let i = 0; i < bubbleArray.length; i++) {
        let bubbleWasClicked = bubbleArray[i].clicked(mouseX, mouseY);
        if (bubbleWasClicked) {
            bubbleArray[i].changeColor();
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
    changeColor() {
        this.brightness = 255;
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

    show() {
        stroke(255);
        noStroke();
        let r = this.amountOfRed
        let g = this.amountOfBlue
        let b = this.amountOfGreen
        fill(this.brightness, b, g);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}