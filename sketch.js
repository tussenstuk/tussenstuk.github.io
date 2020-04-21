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
//rodrigo
var bx8;
var by8;
//waylon
var bx9;
var by9;

var chido = 300;

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
     bx = windowWidth/16;
     by = height/1.5;
//sebastien
     bx3 = windowWidth/10.5;
     by3 = windowHeight/0.5;
//katrina
     bx1 = windowWidth/4;
     by1 = 500;
//bia
     bx2 = windowWidth/3;
     by2 = windowHeight/0.5;
//aboozar
     bx4 = windowWidth/2;
     by4 = 0;
//anna
     bx5 = windowWidth/1.9;
     by5 = 0;
//firdous
     bx6 = windowWidth/1.57;
     by6 = height/1.5;
//seyed
     bx7 = windowWidth/1.5;
     by7 = 500;
//rodrigo
     bx8 = windowWidth/1.24;
     by8 = 500;
//waylon
     bx9 = windowWidth/1.12;
     by9 = height/0.5;
}

function draw() {

    textFont('FoundersGrotesk-Light');
    textSize(18);
    textLeading(80);


    clear();
/*
    push();
    cruz();
    pop();

    push();
    cruz2();
    pop();
*/
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

    push();
    rodrigo();
    pop();

    push();
    waylon();
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
        mouseY > by - chido &&
        mouseY < by + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx - 30 &&
        mouseX < bx + 30 &&
        mouseY > by - chido &&
        mouseY < by + chido && mouseIsPressed

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
        mouseY > by1 - chido &&
        mouseY < by1 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx1 - 30 &&
        mouseX < bx1 + 30 &&
        mouseY > by1 - chido &&
        mouseY < by1 + chido && mouseIsPressed

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

    rect(-63, 0, -bruit_size, 3);
    rect(115, 0, bruit_size, 3);
    text("KATRINA JURJANS", -48, -17.5 + spaze);
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
        mouseY > by2 - chido &&
        mouseY < by2 + 800

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx2 - 30 &&
        mouseX < bx2 + 30 &&
        mouseY > by2 - chido &&
        mouseY < by2 + chido && mouseIsPressed

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
    rect(130, 0, bruit_size, 3);
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
        mouseY > by3 - chido &&
        mouseY < by3 + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx3 - 30 &&
        mouseX < bx3 + 30 &&
        mouseY > by3 - chido &&
        mouseY < by3 + chido && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
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
    rect(151, 0, bruit_size, 3);
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
    var by4 = 250 + noise(millis() * bruity4) * 300;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;

    fill(255);
    noStroke();

    if (

        mouseX > bx4 - 20 &&
        mouseX < bx4 + 20 &&
        mouseY > by4 - chido &&
        mouseY < by4 + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx4 - 15 &&
        mouseX < bx4 + 15 &&
        mouseY > by4 - chido &&
        mouseY < by4 + chido && mouseIsPressed

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

    
    
    rect(-12, 0, -bruit_size, 3);
    rect(177, 0, bruit_size, 3);
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
    var bruity5 = 0.00009;
    var by5 = 350 + noise(millis() * bruity5) * 200;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;

    fill(255);
    noStroke();

    if (

        mouseX > bx5 - 20 &&
        mouseX < bx5 + 20 &&
        mouseY > by5 - chido &&
        mouseY < by5 + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx5 - 20 &&
        mouseX < bx5 + 20 &&
        mouseY > by5 - chido &&
        mouseY < by5 + chido && mouseIsPressed

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

    
    
    rect(-10, 0, -bruit_size, 3);
    rect(160, 0, bruit_size, 3);
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
        mouseY > by6 - chido &&
        mouseY < by6 + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx6 - 30 &&
        mouseX < bx6 + 30 &&
        mouseY > by6 - chido &&
        mouseY < by6 + chido && mouseIsPressed

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

    
    
    rect(-12, 0, -bruit_size, 3);
    rect(138, 0, bruit_size, 3);
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
        mouseY > by7 - chido &&
        mouseY < by7 + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx7 - 30 &&
        mouseX < bx7 + 30 &&
        mouseY > by7 - chido &&
        mouseY < by7 + chido && mouseIsPressed

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

    
    
    rect(-12, 0, -bruit_size, 3);
    rect(190, 0, bruit_size, 3);
    text("SEYED M. TABATABAEI", 0, -17.5 + spaze);
    pop();



}


function rodrigo() {

    push();

/*
    var bruitx1 = -0.000002;
    var bx1 = noise(millis() * bruitx1) * 500;
*/
    var bruity8 = 0.00009;
    var by8 = 300 + noise(millis() * bruity8) * 200;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;

    fill(255);
    noStroke();

    if (

        mouseX > bx8 - 30 &&
        mouseX < bx8 + 30 &&
        mouseY > by8 - chido &&
        mouseY < by8 + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx8 - 30 &&
        mouseX < bx8 + 30 &&
        mouseY > by8 - chido &&
        mouseY < by8 + chido && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx8, by8);
    

   angleMode(DEGREES); // Change the mode to DEGREES
  let a = 280;

            rotate(a);



    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-12, 0, -bruit_size, 3);
    rect(170, 0, bruit_size, 3);
    text("RODRIGO VELASCO", 0, -17.5 + spaze);
    pop();

}


function waylon() {

push();
/*
    var bruitx2 = 0.00001;
    var bx2 = noise(millis() * bruitx2) * 200;
*/
    var bruity9 = 0.000018;
    var by9 = noise(millis() * bruity9) * 200;

    var bruit = 0.0001;
    var bruit_size = 1600 + noise(millis() * bruit) * 800;
    var bruitcursor = 0.000021;
    var bruit_cursor = noise(millis() * bruitcursor) * -6;

    fill(255);
    noStroke();

    if (

        mouseX > bx9 - 30 &&
        mouseX < bx9 + 30 &&
        mouseY > by9 - chido &&
        mouseY < by9 + chido

    ) {

        overBox = true;
        noStroke();
        fill('#A7F1FF');
    } else {
        overBox = false;
    }

    if (

        mouseX > bx9 - 30 &&
        mouseX < bx9 + 30 &&
        mouseY > by9 - chido &&
        mouseY < by9 + chido && mouseIsPressed

    ) {

        overBox = true;
        window.open("PooyanAlizadeh", "_self");
    } else {
        overBox = false;
    }


    //rectMode(CENTER);
    
    translate(bx9, by9);
    

    //rotate(bruit_cursor);
    angleMode(DEGREES); // Change the mode to DEGREES
  let a = 80;

            rotate(a);


    //fill('#5B5F97');
    // fill(0, 0);
    // strokeWeight(2);
    // stroke(255);

    
    
    rect(-12, 0, -bruit_size, 3);
    rect(153, 0, bruit_size, 3);
    text("WAYLON WILSON", 0, -17.5 + spaze);
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