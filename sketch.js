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
//sebastien
var bx3;
var by3;
//aboozar
var bx4;
var by4;
//anna
var bx5;
var by5;
//firdous
var bx6;
var by6;
//seyed
var bx7;
var by7;
/*
function preload() {
  futura = loadFont('fonts/futura.otf');
  futuraBold = loadFont('fonts/futura_bold.otf');
}
*/

  

function setup() {


    var canvas = createCanvas(windowWidth, windowHeight);
     canvas.parent('sketch-holder');
//pooyan
     bx = 20;
     by = height/1.5;
//katrina
     bx1 = 200;
     by1 = 500;
//bia
     bx2 = 390;
     by2 = height/0.5;
//sebastien
     bx3 = 60;
     by3 = height/0.5;
//aboozar
     bx4 = 580;
     by4 = 0;
//aboozar
     bx5 = 680;
     by5 = 500;
//firdous
     bx6 = 800;
     by6 = height/1.5;
    //background(255, 0, 0);
//seyed
     bx7 = 850;
     by7 = 500;
    //background(255, 0, 0);
}

function draw() {

    textFont('FoundersGrotesk-Light');
    textSize(18);
    textLeading(80);


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
    katrina();
    pop();

    push();
    bia();
    pop();

    push();
    sebastien();
    pop();

    push();
    aboozar();
    pop();

    push();
    anna();
    pop();

    push();
    firdous();
    pop();

    push();
    seyed();
    pop();
}


function pooyan() {


push();
/*
    var bruitx = 0.00001;
    var bx = noise(millis() * bruitx) * 200;
*/
    var bruity = 0.000028;
    var by = noise(millis() * bruity) * 500;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;
    var bruitcursor = 0.000021;
    var bruit_cursor = noise(millis() * bruitcursor) * -6;

    fill(255);
    noStroke();

    if (

        mouseX > bx - 30 &&
        mouseX < bx + 30 &&
        mouseY > by - 800 &&
        mouseY < by + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx - 30 &&
        mouseX < bx + 30 &&
        mouseY > by - 800 &&
        mouseY < by + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx, by);
    

    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
  let a = 80;

            rotate(a);


    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-10, 0, -bruit_size, 3);
    rect(165, 0, bruit_size, 3);
    text("POOYAN ALIZADEH", 0, -17.5 + spaze);
    pop();



}

function katrina() {

    push();

/*
    var bruitx1 = -0.000002;
    var bx1 = noise(millis() * bruitx1) * 500;
*/
    var bruity1 = 0.00009;
    var by1 = 300 + noise(millis() * bruity1) * 200;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;

    fill(255);
    noStroke();

    if (

        mouseX > bx1 - 30 &&
        mouseX < bx1 + 30 &&
        mouseY > by1 - 800 &&
        mouseY < by1 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx1 - 30 &&
        mouseX < bx1 + 30 &&
        mouseY > by1 - 800 &&
        mouseY < by1 + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx1, by1);
    

   angleMode(DEGREES); // Change the mode to DEGREES
  let a = 280;

            rotate(a);



    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-25, 0, -bruit_size, 3);
    rect(150, 0, bruit_size, 3);
    text("KATRINA JURJANS", 0, -17.5 + spaze);
    pop();

}

function bia() {

push();
/*
    var bruitx2 = 0.00001;
    var bx2 = noise(millis() * bruitx2) * 200;
*/
    var bruity2 = 0.000018;
    var by2 = noise(millis() * bruity2) * 200;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;
    var bruitcursor = 0.000021;
    var bruit_cursor = noise(millis() * bruitcursor) * -6;

    fill(255);
    noStroke();

    if (

        mouseX > bx2 - 30 &&
        mouseX < bx2 + 30 &&
        mouseY > by2 - 800 &&
        mouseY < by2 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx2 - 30 &&
        mouseX < bx2 + 30 &&
        mouseY > by2 - 800 &&
        mouseY < by2 + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("BiaWolanski", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx2, by2);
    

    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
  let a = 80;

            rotate(a);


    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-10, 0, -bruit_size, 3);
    rect(165, 0, bruit_size, 3);
    text("BIA WOLANSKI", 0, -17.5 + spaze);
    pop();



}


function sebastien() {

push();
/*
    var bruitx2 = 0.00001;
    var bx2 = noise(millis() * bruitx2) * 200;
*/
    var bruity3 = 0.000018;
    var by3 = noise(millis() * bruity3) * 500;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;
    var bruitcursor = 0.000021;
    var bruit_cursor = noise(millis() * bruitcursor) * -6;

    fill(255);
    noStroke();

    if (

        mouseX > bx3 - 30 &&
        mouseX < bx3 + 30 &&
        mouseY > by3 - 800 &&
        mouseY < by3 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx3 - 30 &&
        mouseX < bx3 + 30 &&
        mouseY > by3 - 800 &&
        mouseY < by3 + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("BiaWolanski", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx3, by3);
    

    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
  let a = 80;

            rotate(a);


    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-10, 0, -bruit_size, 3);
    rect(165, 0, bruit_size, 3);
    text("SEBASTIEN AUBIN", 0, -17.5 + spaze);
    pop();



}


function aboozar() {

    push();

/*
    var bruitx1 = -0.000002;
    var bx1 = noise(millis() * bruitx1) * 500;
*/
    var bruity4 = 0.00009;
    var by4 = 500 + noise(millis() * bruity4) * 300;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;

    fill(255);
    noStroke();

    if (

        mouseX > bx4 - 30 &&
        mouseX < bx4 + 30 &&
        mouseY > by4 - 800 &&
        mouseY < by4 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx4 - 30 &&
        mouseX < bx4 + 30 &&
        mouseY > by4 - 800 &&
        mouseY < by4 + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx4, by4);
    

   angleMode(DEGREES); // Change the mode to DEGREES
  let a = 280;

            rotate(a);



    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-25, 0, -bruit_size, 3);
    rect(150, 0, bruit_size, 3);
    text("ABOOZAR BEHESHTI", 0, -17.5 + spaze);
    pop();

}



// ANNA  MINZHULINA
function anna() {

    push();

/*
    var bruitx1 = -0.000002;
    var bx1 = noise(millis() * bruitx1) * 500;
*/
    var bruity5 = 0.00008;
    var by5 = 300 + noise(millis() * bruity5) * 200;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;

    fill(255);
    noStroke();

    if (

        mouseX > bx5 - 30 &&
        mouseX < bx5 + 30 &&
        mouseY > by5 - 800 &&
        mouseY < by5 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx5 - 30 &&
        mouseX < bx5 + 30 &&
        mouseY > by5 - 800 &&
        mouseY < by5 + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx5, by5);
    

   angleMode(DEGREES); // Change the mode to DEGREES
  let a = 280;

            rotate(a);



    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-25, 0, -bruit_size, 3);
    rect(150, 0, bruit_size, 3);
    text("ANNA MINZHULINA", 0, -17.5 + spaze);
    pop();

}


function firdous() {


push();
/*
    var bruitx = 0.00001;
    var bx = noise(millis() * bruitx) * 200;
*/
    var bruity6 = 0.000028;
    var by6 = noise(millis() * bruity6) * 500;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;
    var bruitcursor = 0.000021;
    var bruit_cursor = noise(millis() * bruitcursor) * -6;

    fill(255);
    noStroke();

    if (

        mouseX > bx6 - 30 &&
        mouseX < bx6 + 30 &&
        mouseY > by6 - 800 &&
        mouseY < by6 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx6 - 30 &&
        mouseX < bx6 + 30 &&
        mouseY > by6 - 800 &&
        mouseY < by6 + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx6, by6);
    

    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
  let a = 80;

            rotate(a);


    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-10, 0, -bruit_size, 3);
    rect(165, 0, bruit_size, 3);
    text("FIRDOUS NIZAR", 0, -17.5 + spaze);
    pop();



}


function seyed() {


push();
/*
    var bruitx = 0.00001;
    var bx = noise(millis() * bruitx) * 200;
*/
    var bruity7 = 0.000028;
    var by7 = noise(millis() * bruity7) * 500;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;
    var bruitcursor = 0.000021;
    var bruit_cursor = noise(millis() * bruitcursor) * -6;

    fill(255);
    noStroke();

    if (

        mouseX > bx7 - 30 &&
        mouseX < bx7 + 30 &&
        mouseY > by7 - 800 &&
        mouseY < by7 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#FFC145');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx7 - 30 &&
        mouseX < bx7 + 30 &&
        mouseY > by7 - 800 &&
        mouseY < by7 + 800 && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx7, by7);
    

    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
  let a = 80;

            rotate(a);


    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-10, 0, -bruit_size, 3);
    rect(165, 0, bruit_size, 3);
    text("SEYED M. TABATABAEI", 0, -17.5 + spaze);
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