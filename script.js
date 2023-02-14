const listOfVideos = [];
function test(){
    document.getElementById("title").innerHTML = "clicked";
}
function addToList(element){
    listOfVideos.push(element);
    console.log(listOfVideos);
}