var playPause = document.getElementById('play-pause-btn-id');
var playIcon = document.getElementById('play-icon');
var pauseIcon = document.getElementById('pause-icon');
var seekMove = document.getElementById('seek-slider');
var repeatSong = document.getElementById('repeat');
var muteSong = document.getElementById('mute');
var song = document.getElementById('music');
var cms = document.getElementById('current-min-sec');
var dms = document.getElementById('duration-min-sec');
var skipLeft = document.getElementById('skip-left');
skipRight = document.getElementById('skip-right');

var seekSlider = document.getElementById('seek_slider')
function myFunction() {
    playIcon.style.height = "30px"
    playIcon.style.width = "35px"
    playIcon.style.opacity = "100"
    pauseIcon.style.height = "0"
    pauseIcon.style.width = "0"
}

playPause.addEventListener("click", function () {
    if (song.paused == true) {
        song.play();
    } else {
        song.pause();

    }
})



function updateSongTime() {
    if (song.paused == true) {
        playIcon.style.height = "30px"
        playIcon.style.width = "35px"
        playIcon.style.opacity = "100"
        pauseIcon.style.height = "0"
        pauseIcon.style.width = "0"

    } else {
        playIcon.style.height = "0"
        playIcon.style.width = "0"
        playIcon.style.opacity = "0"
        pauseIcon.style.height = "27px"
        pauseIcon.style.width = "27px"
    }

    seekMove.style.width = song.currentTime * 100 / song.duration + "%"
    if (song.ended == true) {
        seekMove.style.width = "0";
    }


    let currentMin = Math.floor(song.currentTime / 60);
    let currentSec = Math.floor(song.currentTime - currentMin * 60);
    let durationMin = Math.floor(song.duration / 60);
    let durationSec = Math.floor(song.duration - durationMin * 60);

    if (currentMin < 10) { currentMin = "0" + currentMin }
    if (currentSec < 10) { currentSec = "0" + currentSec }
    if (durationMin < 10) { durationMin = "0" + durationMin }
    if (durationSec < 10) { durationSec = "0" + durationSec }

    cms.textContent = currentMin + ":" + currentSec;
    dms.textContent = durationMin + ":" + durationSec;

}

repeatSong.addEventListener("click", function () {
    if (song.loop == false) {
        song.loop = true;
        repeatSong.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" fill=\"#2900f7\"><path d=\"M11.45 10.55H10.75Q10.425 10.55 10.2 10.325Q9.975 10.1 9.975 9.75Q9.975 9.4 10.2 9.175Q10.425 8.95 10.775 8.95H12.25Q12.575 8.95 12.8 9.175Q13.025 9.4 13.025 9.75V14.275Q13.025 14.6 12.8 14.825Q12.575 15.05 12.25 15.05Q11.9 15.05 11.675 14.825Q11.45 14.6 11.45 14.25ZM16.95 16.95V14Q16.95 13.55 17.25 13.25Q17.55 12.95 18 12.95Q18.45 12.95 18.75 13.237Q19.05 13.525 19.05 13.975V17.9Q19.05 18.4 18.725 18.725Q18.4 19.05 17.9 19.05H6.95L7.7 19.8Q8.025 20.1 8.038 20.55Q8.05 21 7.725 21.3Q7.425 21.625 7 21.625Q6.575 21.625 6.275 21.325L3.725 18.8Q3.425 18.475 3.425 18Q3.425 17.525 3.725 17.2L6.25 14.7Q6.55 14.375 6.988 14.375Q7.425 14.375 7.725 14.7Q8.05 15 8.05 15.438Q8.05 15.875 7.725 16.175L6.95 16.95ZM7.05 7.05V10Q7.05 10.45 6.75 10.75Q6.45 11.05 6 11.05Q5.55 11.05 5.25 10.762Q4.95 10.475 4.95 10.025V6.1Q4.95 5.6 5.275 5.275Q5.6 4.95 6.1 4.95H17.05L16.3 4.2Q15.975 3.9 15.963 3.45Q15.95 3 16.275 2.7Q16.575 2.375 17 2.375Q17.425 2.375 17.725 2.675L20.275 5.2Q20.575 5.525 20.575 6Q20.575 6.475 20.275 6.8L17.75 9.3Q17.45 9.625 17.012 9.625Q16.575 9.625 16.275 9.3Q15.95 9 15.95 8.562Q15.95 8.125 16.275 7.825L17.05 7.05Z\"/></svg>";
    } else {
        song.loop = false;
        repeatSong.innerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"M16.95 16.95V14Q16.95 13.55 17.25 13.25Q17.55 12.95 18 12.95Q18.45 12.95 18.75 13.237Q19.05 13.525 19.05 13.975V17.9Q19.05 18.4 18.725 18.725Q18.4 19.05 17.9 19.05H6.95L7.7 19.8Q8.025 20.1 8.038 20.55Q8.05 21 7.725 21.3Q7.425 21.625 7 21.625Q6.575 21.625 6.275 21.325L3.725 18.8Q3.425 18.475 3.425 18Q3.425 17.525 3.725 17.2L6.25 14.7Q6.55 14.375 6.988 14.375Q7.425 14.375 7.725 14.7Q8.05 15 8.05 15.438Q8.05 15.875 7.725 16.175L6.95 16.95ZM7.05 7.05V10Q7.05 10.45 6.75 10.75Q6.45 11.05 6 11.05Q5.55 11.05 5.25 10.762Q4.95 10.475 4.95 10.025V6.1Q4.95 5.6 5.275 5.275Q5.6 4.95 6.1 4.95H17.05L16.3 4.2Q15.975 3.9 15.963 3.45Q15.95 3 16.275 2.7Q16.575 2.375 17 2.375Q17.425 2.375 17.725 2.675L20.275 5.2Q20.575 5.525 20.575 6Q20.575 6.475 20.275 6.8L17.75 9.3Q17.45 9.625 17.012 9.625Q16.575 9.625 16.275 9.3Q15.95 9 15.95 8.562Q15.95 8.125 16.275 7.825L17.05 7.05Z\"/></svg>';
    }
})

muteSong.addEventListener("click", function () {
    if (song.muted == false) {
        song.muted = true;
    } else {
        song.muted = false;
    }
})

// skipLeft.addEventListener("click", function () {
//     song.currentTime = song.currentTime - 8;
// })

// skipRight.addEventListener("click", function () {
//     song.currentTime = song.currentTime + 15;
// })



setInterval(updateSongTime,leftSkipRotate,rightSkipRotate, 1);


// skip Javascript start frome here
var leftSkipIcon = document.getElementById('left-skip-icon');
var rightSkipIcon = document.getElementById('right-skip-icon');
var leftSkipBtn = document.getElementById('left-skip-btn');
var rightSkipBtn = document.getElementById('right-skip-btn');
// var t = 1;
// var song1 = 50;
var rotationLeft = 0;
var rotationRight = 0;

leftSkipBtn.addEventListener("click", leftSkipRotate)

function leftSkipRotate() {

    if (song.currentTime  <= 8) {
    } else {
        
        // song1 = song1 - 8;
        rotationLeft = rotationLeft + 360;
        leftSkipIcon.style.transform = "rotate(-" + rotationLeft + "deg)"
        song.currentTime = song.currentTime - 25;
        
    }

}

rightSkipBtn.addEventListener("click", rightSkipRotate)

function rightSkipRotate(){
    
    if (song.currentTime >= song.duration) {
    } else {
        // song1 = song1 + 15;
        rotationRight = rotationRight + 360
        rightSkipIcon.style.transform = "rotate("+rotationRight+"deg)"
        song.currentTime = song.currentTime + 15;
    }
}

// skip Javascript end here





