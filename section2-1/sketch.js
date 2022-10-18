// テキスト「繰り返し」
function setup() {
  for(let i=0;i<9; x++){
  let x=10
    line((i+1)*10,0,(i+1)*10,100);
}
}

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }

