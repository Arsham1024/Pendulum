var pivot;
var len = 300;

var angle = PI / 4;   // start swung out 45 degrees
var angleV = 0;       // angular velocity
var gravity = 0.4;    // swing strength
var damping = 0.999;  // slight energy loss so it eases over time

function setup(){
   createCanvas(800, 600);
   pivot = createVector(width / 2, 80);
}

function draw(){
   background(200);

   // pendulum physics: pull back toward center, then integrate
   var angleA = (-gravity / len) * sin(angle);
   angleV = (angleV + angleA) * damping;
   angle += angleV;

   pendulum(angle);
}

function pendulum(angle){
   var ballX = pivot.x + len * sin(angle);
   var ballY = pivot.y + len * cos(angle);

   stroke(0);
   strokeWeight(2);
   line(pivot.x, pivot.y, ballX, ballY);
   fill(0);
   ellipse(ballX, ballY, 44, 44);
}
