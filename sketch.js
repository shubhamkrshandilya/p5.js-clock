function setup() {
   createCanvas(480,480);
}
function draw(){
  background(0);
  var sec = radians(6*second());
  var min = radians(6*minute());
  var hrs = radians(30*(hour()%12));
  //println(second());
  fill(255);
  ellipse(width/2,height/2,400,400);
  translate(width/2,height/2);
  //rotate(-PI/2);
  fill(0);
  textSize(32);
  text("12",-16,-170);
  text("3",170,0);
  text("6",0,190);
  text("9",-190,0);
  strokeWeight(4);
  line(0,0,100*cos(hrs-PI/2),100*sin(hrs-PI/2));
  strokeWeight(3);
  line(0,0,120*cos(min-PI/2),120*sin(min-PI/2));
  strokeWeight(2);
  line(0,0,140*cos(sec-PI/2),140*sin(sec-PI/2));
}
