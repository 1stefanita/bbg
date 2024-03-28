function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("black");
    smilyFaceStefan(400,300);
    smilyFaceFilip(250,150);
    smileyFaceVlad(450,200); 
 
}

function smilyFaceStefan(x,y) {
    //BODY
    fill("white");
    stroke("black")
    circle(x, y, 50)

    //EYES
    stroke("brown");
    ellipse(x-10, y-10, 10, 5)
    ellipse(x+10, y-10, 10, 5)
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(x-10, y-10, 2)
    circle(x+10, y-10, 2)

    //MOUTH
    stroke("green")
    fill("black")
    arc(x, y+10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("red");
    circle(x-15, y+5, 10);
    circle(x+15, y+5, 10);
    
    
}

function smilyFaceFilip(x, y) {

    //BODY
    fill("white");
    stroke("black")
    circle(x,y, 50)

    //EYES
    stroke("brown");
    ellipse(x-10, y-10, 10, 5);
    ellipse(x+10, y-10, 10, 5);
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(x-10, y-10, 2);
    circle(x+10, y-10, 2);

    //MOUTH
    stroke("red")
    fill("black")
    arc(x, y+10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(x+20, y+5, 7);
    circle(x-20, y+5, 7);
}

function smileyFaceVlad(x, y) {
    //BODY
    fill("white");
    stroke("black")
    circle(x, y, 50)

    //EYES
    stroke("brown");
    ellipse(x-10, y-10, 10, 5)
    ellipse(x+10, y-10, 10, 5)
    //EYE PUPILS
    stroke("black");
    fill("black");
    circle(x-10, y-10, 2)
    circle(x+10, y-10, 2)

    //MOUTH
    stroke("green")
    fill("black")
    arc(x, y+10, 10, 10, 0, Math.PI)

    //CHEEKS
    stroke("pink");
    fill("pink");
    circle(x+20, y+5, 7);
    circle(x-20, y+5, 7);
}
