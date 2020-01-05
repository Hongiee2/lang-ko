function stem(x1,y1,n1) {
  for (var i = 0; i < 10; i++) {
    //줄기
    stroke(85,107,47);
    strokeWeight(3);
    if (frameCount <= n1) {
      line(x1, 400, x1, y1 + frameCount / 10);
    }
    if (frameCount > n1) {
      line(x1, 400, x1, y1+60);
    }
    noStroke();
  }
}

function petal(x2,y2,n1,d1,r1,g1,b1,r2,g2,b2) {
  //꽃잎
  push();
  fill(r1, g1, b1);
  translate(x2, y2);
  noStroke();

  for (var j = 0; j < 10; j++) {
    if (frameCount <= n1) {
      ellipse(0, 10 + frameCount / d1, 10 +     frameCount / 40, 20 + frameCount / d1);
    }
    if (frameCount > n1) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }

  if(frameCount <= n1) {
  fill(r2,g2,b2);
  scale(frameCount/75);
  ellipse(0,0,5,5);
  }
  else if(frameCount > n1) {
  fill(r2,g2,b2);
  ellipse(0,0,40,40);
  }
  pop();
}