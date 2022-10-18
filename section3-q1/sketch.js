// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200,200);
  count = 80;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
   if(count<80){count=80}
   count=(count+0.5)%cycle
  let size=count
  ellipse(width / 2, height / 2, size);
 if(keyIsDown(UP_ARROW)){count=(count+1)%cycle}
}