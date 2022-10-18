// 小手調べ
function setup(){ 
  createCanvas(200,200)
  for(let i = 0; i < 10; i++){
    noFill();
    if(i < 5){
 stroke(0,0,225);
}
else{
 stroke(225,0,0);}
 let x=(i+1)*10;
ellipse(100,100,x);
}
}