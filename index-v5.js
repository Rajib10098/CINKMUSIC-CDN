var music = document.getElementById('music-source');
var playPause = document.getElementById('play-pause-btn');
var playIcon = document.getElementById('play-icon');
var pauseIcon = document.getElementById('pause-icon');
var seekSlider = document.getElementById('seek-slider')
var musicCurrentTime = document.getElementById('currentime');
var tottalDuration = document.getElementById('tottall-duration');

var leftSkipBtn = document.getElementById('skip-left-btn');
var rightSkipBtn = document.getElementById('right-skip-btn');

var rotateLeftIcon = document.getElementById('left-skip-icon');
var rotateRightIcon = document.getElementById('right-skip-icon');

var repeatSong = document.getElementById('repeat-btn');
var repeatIcon = document.getElementById('repeat-music-icon');
var repeatOneIcon = document.getElementById('repeat-music-icon-one');

var openCloseDescription = document.getElementById('description-btn');
var descriptionInfo = document.getElementById('descripton-info');
var descriptionContainer = document.getElementById('music-description-container');

var musicDownlaodBtn = document.getElementById('music-download-btn');
var downloadSongLink = document.getElementById('download-song-link');


let smWiewAllBtnA = document.getElementById("sm-wiewAll-btn-a");

var animationUndoX = NaN;
var animationUndoY = 1;

var rotationLeft = 0;
var rotationRight = 0;

var open = true;




//Save user data start


//localStorage.setItem("GetLink", `${music.src}`)
//localStorage.setItem("title", `${document.title}`)
//localStorage.setItem("Surl", `${document.URL}`)
//localStorage.setItem("confrom", "true")

//Save user data end

// Music playPause btn Start
if(localStorage.isMusicPlayed == "true"){
    music.play();
}



playPause.addEventListener("click", function () {
    if (music.paused == true) {
        //localStorage.setItem("isMusicPlayed", true)
        music.play();

    } else {
        //localStorage.setItem("isMusicPlayed", false)
        music.pause();
    }
})
music.addEventListener("play", function () {
    pauseIcon.style.height = "33px";
    pauseIcon.style.width = "33px";
    playIcon.style.height = "0";
    playIcon.style.width = "0";
})
music.addEventListener("pause", function () {
    playIcon.style.height = "37px";
    playIcon.style.width = "37px";
    pauseIcon.style.height = "0";
    pauseIcon.style.width = "0";
})
music.addEventListener("ended", function () {
    playIcon.style.height = "37px";
    playIcon.style.width = "37px";
    pauseIcon.style.height = "0";
    pauseIcon.style.width = "0";
})

// Music playPause btn end

//Repeat start

if(localStorage.repeat == "true"){
    localStorage.setItem('repeat', true)
    music.loop = true;
    repeatOneIcon.style.height = "40px"
    repeatOneIcon.style.width = "40px"
    repeatIcon.style.transform = "rotate(180deg)"
}



repeatSong.addEventListener("click", function () {
    if (music.loop == false) {
        localStorage.setItem('repeat', true)
        music.loop = true;
        repeatOneIcon.style.height = "40px"
        repeatOneIcon.style.width = "40px"
        repeatIcon.style.transform = "rotate(180deg)"
    } else {
        localStorage.setItem('repeat', false)
        music.loop = false;
        repeatIcon.style.transform = "rotate(-0deg)"
        repeatOneIcon.style.height = "40px"
        repeatOneIcon.style.width = "0"

    }
})


//Repeat end



leftSkipBtn.addEventListener("click", function () {

    if (music.currentTime <= 8) {
    } else {


        rotationLeft = rotationLeft + 360;
        rotateLeftIcon.style.transform = "rotate(-" + rotationLeft + "deg)"
        music.currentTime = music.currentTime - 8;

    }
})
rightSkipBtn.addEventListener("click", function () {


    if (music.currentTime >= music.duration) {
    } else {

        rotationRight = rotationRight + 360;
        rotateRightIcon.style.transform = "rotate(" + rotationRight + "deg)"
        music.currentTime = music.currentTime + 15;
    }

})
// Open close Description start

if(localStorage.isscdDescrip == "true"){

    localStorage.setItem("isscdDescrip", "true")
    descriptionInfo.style.height = "0px";
    descriptionInfo.style.paddingBottom = "0px"
    descriptionInfo.style.paddingTop = "0px"
    descriptionInfo.style.opacity = "0";
    openCloseDescription.innerHTML = "View Description"
    openCloseDescription.style.borderBottom = "none";
    descriptionContainer.style.borderRadius = "5px"
    open = false;

}
openCloseDescription.addEventListener("click", function () {
    if (open == true) {
        localStorage.setItem("isscdDescrip", "true")
        descriptionInfo.style.height = "0px";
        descriptionInfo.style.paddingBottom = "0px"
        descriptionInfo.style.paddingTop = "0px"
        descriptionInfo.style.opacity = "0";
        openCloseDescription.innerHTML = "View Description"
        openCloseDescription.style.borderBottom = "none";
        descriptionContainer.style.borderRadius = "5px"
        open = false;
    } else {
        localStorage.setItem("isscdDescrip", "false")
        descriptionInfo.style.height = "100%";
        descriptionInfo.style.paddingBottom = "20px"
        descriptionInfo.style.paddingTop = "10px"
        descriptionInfo.style.opacity = "100";
        openCloseDescription.innerHTML = "Close Description";
        openCloseDescription.style.borderBottom = "1px solid rgb(87, 87, 87)";
        descriptionContainer.style.borderRadius = "16px"
        open = true;
    }
})


// Open close Description End


musicDownlaodBtn.addEventListener("click", function () {
    musicDownlaodBtn.style.animation = "download-btn 0.5s";
    musicDownlaodBtn.style.animationIterationCount = "5";
    animationUndoX = 0;
   // window.location.href ='https://cinkmusic.blogspot.com/p/nt5ofimxjfa.html'
    window.location.href = music.src

})






//  ***********  Timer JS  **********
function upadateTimer() {
// console.log(music.currentTime);


    animationUndoX = animationUndoX + animationUndoY;
    if (animationUndoX > 14) {
        animationUndoX = NaN;
        musicDownlaodBtn.style.animation = "";
    }


    seekSlider.style.width = music.currentTime * 100 / music.duration + "%"
    if (music.ended == true) {
        seekSlider.style.width = "0";
    }


    let currentMin = Math.floor(music.currentTime / 60);
    let currentSec = Math.floor(music.currentTime - currentMin * 60);
    let durationMin = Math.floor(music.duration / 60);
    let durationSec = Math.floor(music.duration - durationMin * 60);

    if (currentMin < 10) { currentMin = "0" + currentMin }
    if (currentSec < 10) { currentSec = "0" + currentSec }
    if (durationMin < 10) { durationMin = "0" + durationMin }
    if (durationSec < 10) { durationSec = "0" + durationSec }

    musicCurrentTime.textContent = currentMin + ":" + currentSec;
    tottalDuration.textContent = durationMin + ":" + durationSec;
}



setInterval(upadateTimer, 200)



     
        window.addEventListener("load", function () {
            

            smWiewAllBtnA.href = `https://cinkmusic.blogspot.com/search?q=${encodeURIComponent(smLabel)}`


            fetch(`https://www.googleapis.com/blogger/v3/blogs/6002919485693520244/posts/search?q=${encodeURIComponent(smLabel)}&key=AIzaSyDM7PgWDnsmjmusZ1K7sfoeBQCcOSHkLmA`).then((response) => response.json()).then((data) => {

                let displaySeeMore = "";
                for (let i = 0; i < data.items.length; i++) {
                    let findImage = data.items[i].content
                    let resizingTheImage = new URL(findImage.match(/\bhttps?:\/\/blogger.googleusercontent.com\/\S+/gi)).href.replace("s1600", "s150")



                    displaySeeMore += `

      <div class="SeeMoreContainer">
        
        <a style="text-decoration: none;" href="${data.items[i].url}">
            <div class="SeeMoreImageContainer"><p class="smLoading">Loading...</p>
            <img class="SeeMoreImage" src="${resizingTheImage}" alt="" loading="lazy">
        </div>
        </a>

        <div class="SeeMoretitleContainer">
            <a style="text-decoration: none;" href="${data.items[i].url}"><p class="SeeMoreSongTitle">${data.items[i].title}</p></a>
        </div>

      </div>
      `





                    document.getElementById("See-more-container").innerHTML = displaySeeMore;

                }




            })


        })

