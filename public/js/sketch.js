const inputStr = "(간주). 엄마가 섬그늘에 굴따러가면. 아이는 혼자남아. 집을보다가. 바다가 들려주는 자장노래에. 팔베고 스르르르 잠이듭니다. (간주). 아기는 잠을곤히 자고있지만. 갈매기 울음소리 맘이설레어. 다못찬 굴바구니 머리에이고. 엄마는 고갯길을 달려옵니다.";
const gcpApiUrl = `${document.location.origin}/gcp-lang?text=${inputStr}`;
let resultValue = "Loading...";

var lyrics_list=[]
var Score_list=[]
var Mag_list=[]
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
//            console.log(resultValue);
//            console.log(myJson.document.score); console.log(myJson.document.magnitude);
//            console.log(myJson.sentences[0].sentence); console.log(myJson.sentences[0].score); console.log(myJson.sentences[0].magnitude);
            result = myJson.sentences;
//            resultLen=result.length;
//            console.log(result);

            for(var i=0; i<result.length;i++){
                append(lyrics_list,result[i].sentence)
                append(Score_list, result[i].score);
                append(Mag_list, result[i].magnitude);
            }

        });
}

function timeIt(){
    counter+=1;
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
  text(i+1+"번째 문장. "+lyrics_list[i],20,50);
  text("2. Score: "+Score_list[i],20,100);
  text("3. magnitude : "+Mag_list[i],20,150);
  text("4. 시간 : "+ counter +" 초",20,200);

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

//    console.log(Score_list[1], Mag_list[1]);
//    console.log(resultLen);
}



