const inputStr =
    "(간주). 강변살자. 엄마가 섬그늘에 굴따러가면. 아이는 혼자남아. 집을보다가. 바다가 들려주는 자장노래에. 팔베고 스르르르 잠이듭니다. (간주). 아기는 잠을곤히 자고있지만. 갈매기 울음소리 맘이설레어. 다못찬 굴바구니 머리에이고. 엄마는 고갯길을 달려옵니다.";
let resultValue = "Loading...";

let lyrics_list = [];
let Score_list = [];
let Mag_list = [];
let resultLen;
let time = 0;
let i = 0;
let lyrics;

// let state = null;
let state = ["sad", "very_sad", 'neutral', 'contrary_neutral', 'good', 'very_good'];
let state_index = 0;

let timer;
let counter = 0;

let x = 190;
let y = 30;

let gras,
    animation1, animation2,
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
    createCanvas(1280, 720);
    frameRate(fr);

    setInterval(timeIt, 1000);

    sad_back = new Animate("/sad/", "sad", 15);
    Angry_back = new Animate("/angry/", "angry", 15);
    calm_back = new Animate("/calm/", "calm", 15);
    Aniticipate_back = new Animate("/anticipate/", "anticipate", 15);
    surprise_back = new Animate("/surprise/", "surprise", 14);
    happy_back = new Animate("/happy/", "happy", 15);


    fetch(emotionApiUrl(inputStr))
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            resultValue = JSON.stringify(myJson, null, 4);

            result = myJson.sentences;
            resultLen = result.length;

            for (var i = 0; i < result.length; i++) {
                append(lyrics_list, result[i].sentence);
                append(Score_list, result[i].score);
                append(Mag_list, result[i].magnitude);
            }
        });

    fetch(entityApiUrl(inputStr))
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            resultValue = JSON.stringify(myJson, null, 4);
            console.log(`----- 항목 분석 값 -----\n${resultValue}`);
        });
}

function timeIt() {
    counter++;
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        state_index -= 1;
    } else if (keyCode === RIGHT_ARROW) {
        state_index += 1;
        // console.log(state_index);
    }
    if (state_index < 0) state_index = 5;
    if (state_index % 6 == 0) state_index = 0;

}

function draw() {
    // background(255);

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

    // Update_State(Score_list[i], Mag_list[i]);
    console.log(state[state_index]);

    //state = 'sad', 'very_sad', 'neutral', 'contrary_neutral', 'good', very_good'
    Draw_Emotion(state[state_index]);

    stroke(0);
    strokeWeight(2);
    fill(255);
    textAlign(LEFT);
    text(i + 1 + "번째 문장. " + lyrics_list[i], 20, 50);
    text("2. Score: " + Score_list[i], 20, 100);
    text("3. magnitude : " + Mag_list[i], 20, 150);
    text("4. 시간 : " + counter + " 초", 20, 200);

    if (counter > 140) counter = 1;

}
