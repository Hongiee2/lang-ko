function Draw_Emotion(state) {
    console.log(state);
    switch (state) {
        case 'sad':
            console.log('슬픔');
            sad_back.display_background();
            break;

        case 'very_sad':
            console.log('개슬픔');
            Angry_back.display_background();

            break;

        case 'neutral':
            console.log('중립');
            calm_back.display_background();
            // animation1.display_butterfly();
            break;

        case 'contrary_neutral':
            console.log('대립적 중립');
            Aniticipate_back.display_background();
            break;

        case 'good':
            console.log('좋음');
            surprise_back.display_background();
            break;

        case 'very_good':
            console.log('개좋음');
            happy_back.display_background();
            break
    }
}