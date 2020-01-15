function Draw_Emotion(state){
switch(state){
    case 'sad':
      console.log('슬픔');
      senten("sad");
      sad();
      break;

    case 'verysad':
      console.log('개슬픔');
      break;

    case 'neutral':
      console.log('중립');
      senten("normal");
      nothing();
//      smile();
      break;

    case 'contrary_neutral':
      console.log('대립적 중립');
      break;

    case 'good':
      senten("happy");
      smile();
      console.log('좋음');
      break;

    case 'very_good':
      console.log('개좋음');
      break
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
