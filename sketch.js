function setup() {
   createCanvas(480,480);
}
function draw(){
  background(0);
  strokeWeight(4);
  var sec = second();
  var min = minute();
  
  var hrs = hour();
  var mer = hrs<12?"AM":"PM";
  sec = formatting(sec);
  min = formatting(min);
  hrs = formatting(hrs%12);

  
  fill(255);
  textSize(48);

  textAlign(CENTER, CENTER);
  text(hrs+":"+ min+":"+sec+" "+mer, width/2, height/2);
}

function formatting(num){
  if(int(num)<10){
    return "0"+num;
  }
  return num;
}