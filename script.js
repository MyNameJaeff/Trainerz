const listOfVideos = [];
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function(e) {
        let imageNr = this.id;
        let fullImageNr = this.id;
        let nrArray = imageNr.split("./images/").pop();
        nrArray = nrArray.substring(0, nrArray.length-4);
        playVideo(nrArray, fullImageNr);
    }
}
function playVideo(videoNr, fullImageNr){
    let videoPlaying = document.createElement("video");
    videoPlaying.src = "./videos/"+videoNr+".mp4";
    videoPlaying.controls = true;
    document.getElementById("div"+fullImageNr).appendChild(videoPlaying);
    alert("The video that should play would be: " + videoNr);
}