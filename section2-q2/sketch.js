// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    if((i+j)%2==1)
   {fill(130)}
   else{fill(255)}
    rect(i*size,j*size,25,25);// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

    if((i+j)%2==1&&j<3){fill(255,0,0)}
    if((i+j)%2==1&&j>4){fill(0)}
    ellipse(i*size+12.5,j*size+12.5,21)
}
}
}