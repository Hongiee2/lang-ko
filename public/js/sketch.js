const inputStr =
  "파란 하늘. 파란 하늘 꿈이 드리운 푸른 언덕에. 아기 염소 여럿이. 풀을 뜯고 놀아요.";
let resultValue = "Loading...";

let resultScore = [];
let resultMag = [];
let resultLen;
let time = 0;
let i = 0;
let lyrics;

let timer;
let counter = 0;

let x = 190;
let y = 30;

let gras,
  animation1,
  index1 = 0,
  a = 830;
let butter = [];

let fr = 60;
let count = 0;

function preload() {
  lyrics = loadJSON("/lyrics.json", gotData);
  img = loadImage("/child.png");
}

function gotData(data) {
  print(data);
  spaceData = data;
}

function setup() {
  createCanvas(1024, 800);
  frameRate(fr);

  setInterval(timeIt, 1000);

  gras = loadImage("grass.png");

  animation1 = new Animate("butterfly", 14);

  fetch(emotionApiUrl(inputStr))
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      resultValue = JSON.stringify(myJson, null, 4);

      result = myJson.sentences;
      resultLen = result.length;

      for (let i = 0; i < result.length; i++) {
        append(resultScore, result[i].score);
        append(resultMag, result[i].resultMag);
      }
    });

  fetch(entityApiUrl(inputStr))
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      resultValue = JSON.stringify(myJson, null, 4);
      console.log(`----- 항목 분석 값 -----\n${resultValue}`);
    });
}

function timeIt() {
  counter++;
}

function draw() {
  background(255);

  image(img, 0, 0);
  image(gras, 0, 600);

  textSize(20);

  for (let a = 0; a < 10; a++) {
    if (
      spaceData.sentence[a].시간 <= counter &&
      counter <= spaceData.sentence[a].시간 + spaceData.sentence[a].길이
    ) {
      i = a;
      break;
    }
  }

  emotion(spaceData.sentence[i].감정);

  stroke(0);
  strokeWeight(2);
  fill(0);
  textAlign(LEFT);
  text(i + 1 + "번째 문장. " + spaceData.sentence[i].내용, 20, 50);
  text("2. 감정 : " + spaceData.sentence[i].감정, 20, 100);
  text("3. 시간 : " + counter + " 초", 20, 150);

  if (counter > 140) counter = 1;

  stem(200, 500, 600);
  petal(200, 400, 600, 20, 255, 123, 176, 255, 223, 135);
  //파란꽃
  stem(400, 500, 600);
  petal(400, 400, 600, 20, 61, 96, 210, 255, 35, 102);
  //노란꽃
  stem(555, 500, 600);
  petal(555, 400, 600, 20, 255, 238, 48, 140, 255, 140);
  //보라꽃
  stem(700, 500, 600);
  petal(700, 400, 600, 20, 193, 105, 255, 119, 224, 218);

  animation1.display();
}
