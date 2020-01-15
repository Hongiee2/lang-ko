//Mag 범위 0~inf

function Update_State(Score, Magnitude){
  if (Score>=(-0.2)&&Score<=0.2&&Magnitude<5) {
    state='neutral';
  }

  if (Score>=(-0.2)&&Score<=0.2&&Magnitude>=5) {
    state='contrary_neutral';
  }

  if (Score>=0.7&&Magnitude>=5) {
    state='very_good';
  }

  if (Score>=0.7&&Magnitude<5) {
    state='good';
  }

  if (Score<=(-0.5)&&Magnitude>=5) {
    state='verysad';
  }

  if (Score<=(-0.5)&&Magnitude<5) {
    state='sad';
  }
}
