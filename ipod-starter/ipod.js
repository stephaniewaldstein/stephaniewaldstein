// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var i = 2;
var songnum = 6;

function init() {
    for (var x = 0; x <= 5; x++) {
    volLevels[x] = document.getElementById ("vl"+x);
    if (x < 3 ){
      volLevels[x].style.background = "#9f5cc4";
    }
  }
}

function volUp() {
  if(i < 5){
    i++;
    volLevels[i].style.background = "#9f5cc4";
    }
  }


function volDown() {
  if(0 <= i){
    volLevels[i].style.background = "white";
    i--;
  }
  }


var time = 0;
var timer;
function switchPlay() {
  var icon = document.getElementById("icon");
    if (icon.innerHTML == "play_arrow") {
      icon.innerHTML = "pause";
      timer = setInterval(function() {
        time++;
        if (time < 180){
        document.getElementById("time").value = time;
        document.getElementById("player-time").innerHTML = secondsToMs(time);
      }
        else {
          nextSong();
          time = 0;
        }}, 1000);
    }
    else {
      icon.innerHTML="play_arrow";
      clearInterval(timer);
}
}






function nextSong() {
let next = document.getElementById("skip");
if (next){
  songnum++;
  if (songnum < 10){
    document.getElementById("player-song-name").innerHTML = tracklist[songnum];
    time = 0;
    document.getElementById("time").value = time;
    document.getElementById("player-time").innerHTML = secondsToMs(time)}
    else {
      songnum = 0;
      time = 0;
      document.getElementById("player-song-name").innerHTML = tracklist[songnum];
      document.getElementById("time").value = time;
      document.getElementById("player-time").innerHTML = secondsToMs(time);
    }
  }
}



function prevSong() {
	let prev = document.getElementById("prev");
  if (prev){
    songnum--;
    if (songnum > 0){
      time = 0;
      document.getElementById("player-song-name").innerHTML = tracklist[songnum];
      document.getElementById("time").value = time;
      document.getElementById("player-time").innerHTML = secondsToMs(time);
    }
    else{
      songnum = 9;
      time = 0;
      document.getElementById("player-song-name").innerHTML = tracklist[songnum];
      document.getElementById("time").value = time;
      document.getElementById("player-time").innerHTML = secondsToMs(time);
    }
  }
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
