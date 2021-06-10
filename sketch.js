function setup() {
  createCanvas(400, 400);
}
let p1 = {x:10,y:20};p2 = {x:100,y:30};

let p3 = {x:100,y:10};p4 = {x:200,y:50};

let p5 = {x:100,y:10};p6 = {x:200,y:50};


function draw() {
  background(220);
  puntoPendiente(p1,p2);
  DDA(p3, p4)
  Bresenham(p5, p6);
}

function puntoPendiente(p1, p2){
  const dx  =  p2.x - p1.x;
  const dy  =  p2.y - p1.y;
  const m = dy/dx;

  b = p1.y - m * p1.x

  point(p1.x, p1.y);

  let x = p1.x + 1;
  let y;
  while (x != p2.x) {
    y = m * x + b;
    point(x,y);
    x++;
    
  }

}
function DDA(p1, p2){
    let p, xi, yi ,k;

    let dx = p2.x - p1.x;
    let dy = p2.y - p1.y;
    
    let y  = p2.y;
    let x  = p1.x;

    if (dx > dy || dy == 0) {
      p = dx;
    }else{
      p = dy;
    }

    xi = dx /p;
    yi = dy /p;

    for (k=0; k<p ; k++) {
      x+= xi;
      y+= yi;
      point(x, y);
    }


}
function Bresenham(p1, p2){
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const p = 2*dy -dx;

  for (let i = 0; i < dx; i++) {
    if(p < 0){
      point();
    }else{
      point();
      p = p + 2*dy - 2*dx;
    }
    
  }

}