const listOfVideos = [];
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function(e) {
        let imageNr = this.id;
        let nrArray = imageNr.split("./images/").pop();
        nrArray = nrArray.substring(0, nrArray.length-4);
        playVideo(nrArray);
    }
}
let videoPlayingBox = document.getElementById("videoPlayingBox"); 
videoPlayingBox.style.visibility = "hidden";
function playVideo(videoNr){ //Kan skapa dubletter
    let whereToPlay = document.getElementById("playVideoHere");
    whereToPlay.src = "./videos/"+videoNr+".mp4";
    videoPlayingBox.style.visibility = "visible";
}

document.getElementById("videoPlayingBox").addEventListener('click', stopVideo());
function stopVideo(){
    let whereToPlay = document.getElementById("playVideoHere");
    whereToPlay.src = "";
    videoPlayingBox.style.visibility = "hidden";
}
