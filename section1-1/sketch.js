let x,y,vx,vy;
const g=1
const vyMax=15

function setup(){
  createCanvas(windowWidth, windowHeight);
 x=width/2
 y=height*4/5
 vx=8
 vy=15
}

function draw(){
  background(160, 192, 255);
  fill(0)
  ellipse(x,y,30);
  if(x>width){x=0;}
  else if(x<0){x=width}
  if(keyIsDown(RIGHT_ARROW)){x=x+3}
  if(keyIsDown(LEFT_ARROW)){x=x-3}
if(keyIsDown(" ".charCodeAt(0))){
    x += vx;
    y += vy;
    vy += g; // 重力は「速度の変化量」
    vy = constrain(vy, -vyMax, vyMax); // 速度が大きくなりすぎないように調整
    if(y < height/2 || y > height*4/5){ vy = -1 * vy; }
    y = constrain(y, height/2, height*4/5);}
  }