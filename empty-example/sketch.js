let bubbles= []
let bubble2;
let bubble1;
let bubble;
let img;
let imgArray = [];

function preload() {
    for (let i = 0; i < 7; i++)
    imgArray[i] = loadImage(`img${i}.png`);
   
}

function setup() {
    createCanvas(windowWidth, windowHeight);

   

    for (let i = 0; i < 140; i++){
        
        let amountOfRed = random(0, 255);
        let amountOfBlue = random(0, 255);
        let amountOfGreen = random(0, 255);
        let randomImg = random(imgArray);
        bubble = new Bubble(random(0, windowWidth), random(0, windowHeight),  50, amountOfRed, amountOfBlue, amountOfGreen, randomImg);

        bubbles.push(bubble);
    }


}

function mousePressed ( ) {
    for (let i = 0; i < bubbles.length; i++) {
        
            
            bubbles[i].clicked(mouseX, mouseY);
        
    }
}

function draw() {

    background(255);

   
    
       
        for (b of bubbles) {
            {
                b.show();
                b.move();
               
            }
    }
   
}


class Bubble {
    constructor(xPostition, yPosition, radius, amountOfRed, amountOfBlue, amountOfGreen, img) {

        this.x = xPostition,
            this.y = yPosition,
            this.r = radius,
            this.amountOfRed = amountOfRed,
            this.amountOfBlue = amountOfBlue,
            this.amountOfGreen = amountOfGreen,
           
            this.img = img
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

        // let distance = dist(px, py, this.x, this.y);
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.img = random(imgArray);

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
        image(this.img, this.x, this.y, this.r * 2, this.r * 2)
        // stroke(150);
        // //noStroke();
        // let r = this.amountOfRed
        // let g = this.amountOfBlue
        // let b = this.amountOfGreen
        // fill(r, b, g);
        // ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}