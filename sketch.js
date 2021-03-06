var r, posX, posY, myImage
var incrementX = 1;
var incrementY = 1;


function preload() {
    myImage = loadImage("images/Background 2.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(55)
  r = 50
  posX = random(r,250)
  posY = random(r,150)
  
}

function draw() {
  
    backgroundImage(myImage)
    for (var i = 0; i <= 6000; i++){
  
  var posX = random(0,width)
  var posY = random(0, height)
  
  var myColour = get(posX,posY)
  fill (myColour)
  noStroke()
  ellipse(posX,posY,7,7)
    }

    translate(0,-1*(height/15))
    fill(255);
    stroke(0)
    textFont('Indie Flower')
    textSize(height/3);
    textAlign(CENTER);
    text(hour(),width/2,height/3);
    text(minute(),width/2,height/3*2);
    text(second(),width/2,height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    backgroundImage(myImage)
}

function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;


    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;


    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;


    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);


    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;


    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;


    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}