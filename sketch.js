function setup() {
  createCanvas(400, 400);
}
let p1 = {x:10,y:20};p2 = {x:100,y:30};

let p3 = {x:100,y:10};p4 = {x:200,y:50};

let p5 = {x:200,y:10};p6 = {x:300,y:50};


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
  const dx = abs(p2.x - p1.x);
  const dy = abs(p2.y - p1.y);
  let p = 2*dy -dx;
  let x, y, aux;

  if (p1.x > p2.x) {
    x = p1.x;
    y = p2.y;
    aux = p1.x;
  }else{
    x = p1.x;
    y = p1.y;
    aux = p2.x;
  }
  point(x, y);

  while (x < aux) {
    x = x + 1;

    if ( p < 0 ) {
      p = p + 2*dy;
    }else{
      y = y + 1;
      p = p + 2*(dy - dx);
      
    }
    point(x,y);
  }

}