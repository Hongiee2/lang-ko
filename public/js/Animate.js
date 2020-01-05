class Animate1 {
  constructor(imagePrefix, count){
    this.imagename = imagePrefix;
    this.counts = count;

    for (var i = 0; i < this.counts; i++) {
      var filename = this.imagename + (i + 1) + '.png';
      butter[i] = loadImage(filename);
    }
}

  display() {
    //print("3");
    index1 = (index1+1) % butter.length;
    image(butter[index1],a,50*sin(a/80) + 50,40,40);
    if(a < 0)
      a = 830;

    a--;
  }
}