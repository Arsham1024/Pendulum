var origin;
var angle;

function setup(){
   createCanvas(540, 360);
   origin = createVector(width/2, 0);
   len = 180;
}

function draw(){
   background(200);
   angle = PI/4;
   pendalum(angle);
}


function pendalum(angle){
   stroke(0);
   var ballX = (origin.x + len) * sin(angle);
   var ballY = (origin.y + len) * cos(angle);

   line(origin.x, origin.y, ballX, ballY);
   ellipse(ballX, ballY, 30, 30);
}