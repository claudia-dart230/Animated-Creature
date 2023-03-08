let yPos = 300;
let bColor = 236;
let rColor = 12;
let gColor = 255;
let speed = 0.10;
let b = 1;
let a = 0;
let c = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(rColor, gColor, bColor);
  
  strokeWeight(2);
  fill(194, 138, 48);
  rect(0,350,400,100);
  
//tail
  stroke(62,140,10);
  strokeWeight(0.5);
  fill(137,191,65);
  triangle(280,100,310,100,295,130)
  triangle(280,100,310,100,295,70);
  triangle(295,70,310,100,325,70);
  triangle(295,70,325,70,310,40);
  triangle(310,40,325,70,370,40);
  triangle(325,70,355,70,340,40);
  triangle(340,40,355,70,370,40);
  
  //body
  stroke(5,166,88);
  fill(47,168,79);
  ellipse(200,200,255,240);
  
  //legs
  stroke(199,182,26);
  fill(168,168,47);
  rect(100,200,35,150,10);
  rect(250,200,35,150,10);
  
  //6 top ring turtle shell
  strokeWeight(1);
  fill(168,168,49);
  ellipse(200,200,250,100);
          
  //5 ring of turtle shell        
  fill(149,168,50);
  ellipse(200,180,250,100);
  
  //4 ring of turtle shell
  fill(137, 191, 65);
  ellipse(200,160,235,100);
  
  //3 ring of turtle shell
  fill(113, 163, 46);
  ellipse(200,140,215,100);
  
  //2 ring of turtle shell
  fill(98, 140, 41);
  ellipse(200,120,180,100);
  
  //1 ring of turtle shell TOP
  fill(89, 120, 46);
  stroke(100,100,100);
  ellipse(200,105,150,85);
  
  //right paw
  stroke(169,240,75);
  strokeWeight(2);
  fill(169,219,75);
  ellipse(107,340,15,28);
  ellipse(117,340,15,28);
  ellipse(127,340,15,28);
  
  //left paw
  ellipse(257,340,15,28);
  ellipse(267,340,15,28);
  ellipse(277,340,15,28);
  
  //head
  stroke(169, 219, 75);
  strokeWeight(1);
  fill(169, 219, 75);
  ellipse(195,240,140,120);
  
  
    
  //eyes
  stroke(26,199,15);
  fill(242,242,211);
  ellipse(160,230,40,40);
  fill(237, 12, 230);
  ellipse(162,c+238,25,25);
  fill(15,15,15);
  ellipse(162,c+238,15,15);
  
  stroke(26,199,15);
  fill(242,242,211);
  ellipse(192,230,40,40);
  fill(237, 12, 230);
  ellipse(194,c+238,25,25);
  fill(15,15,15);
  ellipse(194,c+238,15,15);
  
  stroke(26,199,15);
  fill(242,242,211);
  ellipse(224,230,40,40);
  fill(237, 12, 230);
  ellipse(226,c+238,25,25);
  fill(15,15,15);
  ellipse(226,c+238,15,15);
  
  //spots
  fill(89,120,46);
  ellipse(200,200,15,12);
  ellipse(180,190,15,12);
  ellipse(225,265,15,12);
  ellipse(150,272,15,12);
  ellipse(110,300,15,12);
  ellipse(275,250,15,12);
  
  fill(209,125,29);
  ellipse(210,98,15,12);
  ellipse(150,115,15,12);
  ellipse(160,100,15,12);
  ellipse(105,160,15,12);
  ellipse(295,182,15,12);

  //mouth
  push();
  fill(10,10,10);
  translate(200,285);
  rotate(radians(-10));
  ellipse(0,0,65,8);
  pop();
  
  //tongue
  fill(240,164,12);
  triangle(180,288,212,282,210,yPos);
  
  yPos = yPos + speed;
  if (yPos >320){
    yPos = 340;
  }
  
  //bug

  fill(12,12,12);
  noStroke();
  rotate(radians(-20));
  ellipse(b+50,a+50,20,10);
  fill(240,12,12);
  ellipse(b+45,a+48,5,5);
  ellipse(b+50,a+50,5,5);
  fill(197, 211, 235);
  stroke(0.2);
  ellipse(b+53,a+59,20,10);
  ellipse(b+47,a+42,20,10);
  
  
  bColor = bColor -0.3;
  rColor = rColor +1;
  gColor = gColor -1;
  
  b = b+1;
  a = a+0.35;
  
  c = c - speed;
  if (c < -5){
    c = -15;
      }
  

}
