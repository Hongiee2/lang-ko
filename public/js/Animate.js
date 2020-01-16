class Animate {
  constructor(locate, imagePrefix, count) {
    this.locate=locate;
    this.imagename = imagePrefix;
    this.counts = count;
    this.SaveImg = [];

    for (let i = 0; i < this.counts; i++) {
      let filename = this.locate + this.imagename + (i + 1) + ".png";
      append(this.SaveImg,loadImage(filename));
      butter[i] = loadImage(filename);
      // console.log(saveImg[i]);
    }
  }

  display_background() {
   index1 = (index1 + 1) % this.SaveImg.length;
   background(this.SaveImg[index1],0,0,canvas.width,canvas.height);
  }
}

