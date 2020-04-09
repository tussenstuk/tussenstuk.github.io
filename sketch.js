let posx,
    posy,
    d,
    r = 200,
    r2 = 8,
    w,
    h;

var spaze = 23;

//pooyan
var bx;
var by;
//firdous
var bx1;
var by1;
//bia
var bx2;
var by2;

/*
function preload() {
  futura = loadFont('fonts/futura.otf');
  futuraBold = loadFont('fonts/futura_bold.otf');
}
*/

  

function setup() {


    var canvas = createCanvas(windowWidth, windowHeight);
     canvas.parent('sketch-holder');

     bx = 200;
     by = random(height/2.5, height/1.5);

     bx1 = 350;
     by1 = random(height/2.5, height/1.25);

     bx2 = 500;
     by2 = random(height/2.5, height/1.25);
  // Move the canvas so it’s inside our <div id="sketch-holder">.

    //background(255, 0, 0);
}

function draw() {

    textFont('Space Mono');
    textSize(16);


    clear();

    push();
    cruz();
    pop();

    push();
    cruz2();
    pop();

    push();
    pooyan();
    pop();

    push();
    firdous();
    pop();

    push();
    bia();
    pop();

}

function pooyan() {

    push();


    var bruit = 0.0001;
    var bruit_size = noise(millis() * bruit) * 200;
    var bruitcursor = 0.00001;
    var bruit_cursor = noise(millis() * bruitcursor) * 10;

    fill(255);
    noStroke();

    if (

        mouseX > bx - 100 &&
        mouseX < bx + 100 &&
        mouseY > by - 30 &&
        mouseY < by + 30

    ) {

        overBox = true;
        noStroke();
        //strokeWeight(1);
        fill('#5B5F97');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx - 100 &&
        mouseX < bx + 100 &&
        mouseY > by - 30 &&
        mouseY < by + 30 && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }

    rectMode(CENTER);
    translate(bx, by);
    rotate(bruit_cursor);
    rect(0, 0, bruit_size, 2);
    text("Pooyan Alizadeh", 0, 0 + spaze);
    pop();

}

function firdous() {

    push();


    var bruit = 0.0001;
    var bruit_size = noise(millis() * bruit) * 200;
    var bruitcursor = 0.000021;
    var bruit_cursor = noise(millis() * bruitcursor) * -6;

    fill(255);
    noStroke();

    if (

        mouseX > bx1 - 100 &&
        mouseX < bx1 + 100 &&
        mouseY > by1 - 30 &&
        mouseY < by1 + 30

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx1 - 100 &&
        mouseX < bx1 + 100 &&
        mouseY > by1 - 30 &&
        mouseY < by1 + 30 && mouseIsPressed

    ) {

        overBox = true;
        window.open("FirdousNizar", "_self");
    } else {
        overBox = false;
    }

    rectMode(CENTER);
    translate(bx1, by1);
    rotate(bruit_cursor);
    rect(0, 0, bruit_size, 2);
    text("Firdous Nizar", 0, 0 + spaze);
    pop();

}

function bia() {

    push();


    var bruit = 0.0001;
    var bruit_size = noise(millis() * bruit) * 200;
    var bruitcursor = 0.000051;
    var bruit_cursor = noise(millis() * bruitcursor) * 12;

    fill(255);
    noStroke();

    if (

        mouseX > bx2 - 100 &&
        mouseX < bx2 + 100 &&
        mouseY > by2 - 30 &&
        mouseY < by2 + 30

    ) {

        overBox = true;
        noStroke();
        fill('#FF6B6C');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx2 - 100 &&
        mouseX < bx2 + 100 &&
        mouseY > by2 - 30 &&
        mouseY < by2 + 30 && mouseIsPressed

    ) {

        overBox = true;
        window.open("BiaWolanski", "_self");
    } else {
        overBox = false;
    }

    rectMode(CENTER);
    translate(bx2, by2);
    rotate(bruit_cursor);
    rect(0, 0, bruit_size, 2);
    text("Bia Wolanski", 0, 0 + spaze);
    pop();

}




function cruz() {
    var bruit = 0.0001;
    var bruit_size = noise(millis() * bruit) * 30;
    var bruitcursor = 0.00001;
    var bruit_cursor = noise(millis() * bruitcursor) * 10;
    //var tamango = random(30);
    rectMode(CENTER);
    noStroke();
    fill(255);


    translate(mouseX, mouseY);
    rotate(PI / 4.0);
    rect(0, 0, 1, bruit_size);
    rect(0, 0, bruit_size, 1);
}

function cruz2() {
    var bruit = 0.001;
    var bruit_size = noise(millis() * bruit) * 15;
    var bruitcursor = 0.00001;
    var bruit_cursor = noise(millis() * bruitcursor) * 10;
    //var tamango = random(30);

        // rectMode(CENTER);
        // noStroke();
        // fill(255);


        translate(mouseX, mouseY);
        // rect(0, 0, 1, bruit_size);
        // rect(0, 0, bruit_size, 1);

    noFill();
    stroke(255);
    strokeWeight(1.5);
    ellipse(0, 0, bruit_size, bruit_size);

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}