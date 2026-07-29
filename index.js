var pivot;
var len = 200;

var angle;            // set in setup() — PI isn't defined until p5 loads
var angleV = 0;       // angular velocity
var gravity = 0.4;    // swing strength
var damping = 0.999;  // slight energy loss so it eases over time

function setup(){
   createCanvas(800, 600);
   pivot = createVector(width / 2, height / 2);
   angle = PI / 4;    // start swung out 45 degrees
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
   ellipse(pivot.x, pivot.y, 10, 10);   // pin at the center
   ellipse(ballX, ballY, 44, 44);       // weight at the end
}
