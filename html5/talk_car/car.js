window.onload = function() {
    let container = document.querySelector(".container");
    let btn = container.querySelectorAll(".figure");
    let data = container.querySelectorAll(".data");
    let play1 = btn[0].querySelector("i");
    let play2 = btn[1].querySelector("i");
    console.log(play1)
    console.log(play2)
    let audio_1 = document.querySelector("#play_0");
    let audio_2 = document.querySelector("#play_1");
    // let player_1_url = audio_1.dataset.urls;
    // let player_2_url = audio_2.dataset.urls;


    // for(let i =0;i<btn.length;i++) {
    //     console.log(btn[i])
    // }
    let pause = true;
    var currentTime = (audio_1.currentTime/audio_1.duration)*100;
    btn[0].addEventListener("click",function() {
        if(!pause){
            play1.className="play";
            audio_1.pause();
            pause = true;
            return
        }else {
            play1.className="pause";
            audio_1.play();
            pause = false;
        console.log(currentTime)

        }
        
        data[0].style.width=`${currentTime}%`;
       
        console.log(parseInt(audio_1.currentTime))
        console.log(parseInt(audio_1.duration))
        
    },false)
    let pause2 = true;
    btn[1].addEventListener("click",function() {
        if(pause) {
            if(pause2){
                play2.className="pause";
                audio_2.play();
                pause2 = false;
            }else {
                play2.className="play";
                audio_2.pause();
                pause2 = true;
            }
        }else {
            return false;
        }
        
    },false)
}