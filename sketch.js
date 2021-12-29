// Coding Challenge 130.3: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.2-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.3-fourier-transform-drawing.html
// https://youtu.be/7_vKzcgpfvU
// https://editor.p5js.org/codingtrain/sketches/ldBlISrsQ

let x = [];
let fourierX;
let time = 0;
let path = [];
const W = innerWidth, H=innerHeight


function createAxis(){
strokeWeight(2)
stroke(255,0,0)
line(width/2, 0, width/2, H)
stroke(0,255,0)
line(0, height/2, W, height/2)
}

function drawGraph(){
  const GAP = 40;
  strokeWeight(1)
  stroke(0,0,255, 100)
  for (let i = 0; i<W/2;i++){
   if(i%4==0) stroke(0,0,255,100);
   else stroke(0,0,255,30)
   line(width/2 + i * GAP, 0, width/2 + i * GAP, H)
   line(width/2 - i * GAP, 0, width/2 - i * GAP, H)
  }
  for (let i = 0; i<H/2;i++){
   if(i%4==0) stroke(0,0,255,100);
   else stroke(0,0,255,30)
   line(0, height/2 + i * GAP, W, height/2 + i*GAP)
   line(0, height/2 - i * GAP, W, height/2 - i*GAP)
   
  }
}

function setup() {
  createCanvas(W, H);
  const skip = 1;
  for (let i = 0; i < datas.length; i += skip) {
    const c = new Complex(datas[i].x - 180, datas[i].y - 300);
    x.push(c);
  }
  fourierX = dft(x);
  fourierX.sort((a, b) => b.amp - a.amp);
}

function epicycles(x, y, rotation, fourier) {
  let s = 1.76;
  for (let i = 0; i < fourier.length; i++) {
    if (i==0) continue;
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp * s;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);
    
    strokeWeight(2)
    stroke(0,0,0,160);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(0,0,0,160);
    line(prevx, prevy, x, y);
  }
  return createVector(x, y);
}

function draw() {
  background(255);
  createAxis()
  drawGraph()
  let v = epicycles(width / 2, height / 2, 0, fourierX);
  path.unshift(v);

  beginShape();
  strokeWeight(3)
  stroke(0,0,0,255)
  noFill();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  const dt = TWO_PI / fourierX.length;
  time += dt;

  if (time > TWO_PI) {
    time = 0;
    path = [];
  }
}
