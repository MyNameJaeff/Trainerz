const listOfVideos = [];
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function(e) {
        let imageNr = this.id;
        let fullImageNr = this.id;
        let nrArray = imageNr.split("./images/").pop();
        let fullNrArray = fullImageNr.split("button").pop();
        nrArray = nrArray.substring(0, nrArray.length-4);
        playVideo(nrArray, fullNrArray);
    }
}
let videoPlayingBox = document.getElementById("videoPlayingBox").style.visibility = "hidden"; 
function playVideo(videoNr, fullImageNr){ //Kan skapa dubletter
    let whereToPlay = document.getElementById("playVideoHere");
    whereToPlay.id = fullImageNr;
    whereToPlay.src = "./videos/"+videoNr+".mp4";
    document.getElementById("videoPlayingBox").style.visibility = "visible";
}
/*
let videoPlaying = document.createElement("video");
    videoPlaying.src = "./videos/"+videoNr+".mp4";
    videoPlaying.id = fullImageNr;
    videoPlaying.autoplay = true;
    let videoBox = document.getElementById("div"+fullImageNr);
    videoBox.appendChild(videoPlaying);
    let replaceImage = document.getElementById("button"+fullImageNr);
    videoBox.replaceChild(videoPlaying, replaceImage);
    alert("The video that should play would be: " + videoNr);
    */