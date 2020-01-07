const inputStr =
    "파란 하늘. 파란 하늘 꿈이 드리운 푸른 언덕에. 아기 염소 여럿이. 풀을 뜯고 놀아요.";
const gcpApiUrl = `${document.location.origin}/gcp-lang?text=${inputStr}`;
let resultValue = "Loading...";

var resultScore=[]
var resultMag=[]
var resultLen
var time=0;
var i=0;
var lyrics;

var timer;
var counter=0;

var x = 190;
var y = 30;

let gras, animation1, index1 = 0, a = 830;
let butter = [];

let fr=60;
let count=0;

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

    setInterval(timeIt,1000);

    gras = loadImage('grass.png');

  animation1 = new Animate1("butterfly",14);

    fetch(gcpApiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            resultValue = JSON.stringify(myJson, null, 4);
//            console.log(myJson.document.score); console.log(myJson.document.magnitude);
//            console.log(myJson.sentences[0].sentence); console.log(myJson.sentences[0].score); console.log(myJson.sentences[0].magnitude);

            result = myJson.sentences;
            resultLen=result.length;
//            console.log(result);

            for(var i=0; i<result.length;i++){
                append(resultScore, result[i].score);
                append(resultMag, result[i].resultMag);
            }

        });
}

function timeIt(){
    counter++;
}

function draw() {
    background(255);

    image(img, 0, 0);
    image(gras,0,600);

    textSize(20);

  for(var a=0;a<10;a++)
  {
    if(spaceData.sentence[a].시간<=counter && counter<=spaceData.sentence[a].시간+spaceData.sentence[a].길이)
    {   //가사 시작시간 <= counter && counter
      i=a;
      break;
    }
//          console.log("이게뭐한느거");
  }


  emotion(spaceData.sentence[i].감정);

  stroke(0);
  strokeWeight(2);
  fill(0);
  textAlign(LEFT);
  text(i+1+"번째 문장. "+spaceData.sentence[i].내용,20,50);
  text("2. 감정 : "+spaceData.sentence[i].감정,20,100);
  text("3. 시간 : "+ counter +" 초",20,150);

  if(counter>140)
    counter=1;

  stem(200,500,600);
  petal(200,400,600,20,255,123,176,255,223,135);
  //파란꽃
  stem(400,500,600);
  petal(400,400,600,20,61,96,210,255,35,102);
  //노란꽃
  stem(555,500,600);
  petal(555,400,600,20,255,238,48,140,255,140);
  //보라꽃
  stem(700,500,600);
  petal(700,400,600,20,193,105,255,119,224,218);

  animation1.display();

//    console.log(resultScore[1], resultMag[1]);
//    console.log(resultLen);
}



