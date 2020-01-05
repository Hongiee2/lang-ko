function emotion(Score){
    if(Score<-0.2){
    senten("happy");
    smile();
    }
    else if(Score<0.2){
    senten("sad");
    sad();
    }
    else{
    senten("normal");
    nothing();
    }
}

function smile()
{
  noFill();
  strokeWeight(5);
  stroke(254,136,75);
  beginShape();
  curveVertex(x+25, x+70);
  curveVertex(x+25, x+70);
  curveVertex(x+15, x+93);
  curveVertex(x, x+100);
  curveVertex(x-15, x+93);
  curveVertex(x-25, x+70);
  curveVertex(x-25, x+70);
  endShape();
}


function nothing()
{
  noFill();
  strokeWeight(5);
  stroke(254,136,75);
  beginShape();
  curveVertex(x+25, x+85);
  curveVertex(x+25, x+85);
  curveVertex(x+15, x+85);
  curveVertex(x, x+85);
  curveVertex(x-15, x+85);
  curveVertex(x-25, x+85);
  curveVertex(x-25, x+85);
  endShape();
}

function sad()
{
  noFill();
  strokeWeight(5);
  stroke(254,136,75);
  beginShape();
  curveVertex(x+25, x+100);
  curveVertex(x+25, x+100);
  curveVertex(x+15, x+77);
  curveVertex(x, x+70);
  curveVertex(x-15, x+77);
  curveVertex(x-25, x+100);
  curveVertex(x-25, x+100);
  endShape();
}

function senten(sentence)
{
  stroke(255);
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  textSize(30);
  textAlign(CENTER,TOP);
  text(sentence, 190, 50);
}
