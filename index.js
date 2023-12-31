// initialization of variables
let songindex = 0;
let audioSong = new Audio("1.mp3");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterplay = document.getElementById("masterplay");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let Songname = document.getElementById("Songname");
let customRange2 = document.getElementById("customRange2");
let currentTimeStart = document.getElementById("currentTimeStart");
let currentTimeEnd = document.getElementById("currentTimeEnd");
var imgchange = document.getElementById("imgchange");
let playAnimation = document.getElementsByClassName("playAnimation");

let songs = [
  {
    songName: "Love me Like you do",
    filepath: "1.mp3",
    coverPath: "1.jpg",
  },
  {
    songName: "Into Your Arms",
    filepath: "2.mp3",
    coverPath: "2.jpg",
  },
  {
    songName: "Night Changes",
    filepath: "3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "walinaa cover",
    filepath: "4.mp3",
    coverPath: "4.jpg",
  },
  { songName: "Faded", filepath: "5.mp3", coverPath: "5.jpg" },
  { songName: "Substance", filepath: "6.mp3", coverPath: "6.jpg" },
  {
    songName: "Lose Somebody",
    filepath: "7.mp3",
    coverPath: "7.jpg",
  },
  { songName: "On My Way", filepath: "8.mp3", coverPath: "8.jpg" },
  { songName: "closer", filepath: "9.mp3", coverPath: "9.jpg" },
  { songName: "Paris", filepath: "10.mp3", coverPath: "10.jpg" },
  { songName: "Coping", filepath: "11.mp3", coverPath: "11.jpg" },
  {
    songName: "Titanium",
    filepath: "12.mp3",
    coverPath: "12.jpg",
  },
  { songName: "Silence", filepath: "13.mp3", coverPath: "13.jpg" },
  {
    songName: "Superhero",
    filepath: "14.mp3",
    coverPath: "14.jpg",
  },
  {
    songName: "Sometime",
    filepath: "15.mp3",
    coverPath: "15.jpg",
  },
  {
    songName: "Roackbye",
    filepath: "16.mp3",
    coverPath: "16.jpg",
  },
  {
    songName: "Incredible",
    filepath: "17.mp3",
    coverPath: "17.jpg",
  },
  {
    songName: "Somthing just like this",
    filepath: "18.mp3",
    coverPath: "18.jpg",
  },
  {
    songName: "Dharia",
    filepath: "19.mp3",
    coverPath: "19.jpg",
  },
  {
    songName: "Steal my girl",
    filepath: "20.mp3",
    coverPath: "20.jpg",
  },
  {
    songName: "Call You Mine",
    filepath: "21.mp3",
    coverPath: "21.jpg",
  },
  {
    songName: "without me",
    filepath: "22.mp3",
    coverPath: "22.jpg",
  },
  {
    songName: "Attention",
    filepath: "23.mp3",
    coverPath: "23.jpg",
  },
  {
    songName: "Happier",
    filepath: "24.mp3",
    coverPath: "24.jpg",
  },
  {
    songName: "Lean On",
    filepath: "25.mp3",
    coverPath: "25.jpg",
  },
  {
    songName: "Pretty girl",
    filepath: "26.mp3",
    coverPath: "26.jpg",
  },
  {
    songName: "perfect",
    filepath: "27.mp3",
    coverPath: "27.jpg",
  },
  {
    songName: "Bad Liar",
    filepath: "28.mp3",
    coverPath: "28.jpg",
  },
];
// universal pause

if (audioSong.paused) {
  makeallopacity();
  masterplay.classList.remove("fa-circle-pause");
  masterplay.classList.add("fa-circle-play");
}
audioSong.addEventListener("ended", () => {
  songindex++;

  if (songindex >= songs.length) {
    songindex = 0; //
    makeallopacity();
    playAnimation[songindex].style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
  } else if (audioSong.paused || audioSong.currentTime == 0) {
    makeallopacity();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    playAnimation[songindex].style.opacity = 1;
  } else {
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    playAnimation[songindex].style.opacity = 0;
  }

  audioSong.src = songs[songindex].filepath;
  audioSong.play();
  Songname.innerText = songs[songindex].songName;
  imgchange.src = songs[songindex].coverPath;

  document.getElementById(songindex).classList.remove("fa-circle-play");
  document.getElementById(songindex).classList.add("fa-circle-pause");
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});

songItem.forEach((Element, index) => {
  Element.getElementsByTagName("img")[0].src = songs[index].coverPath;
  Element.getElementsByClassName("song-name")[0].innerText =
    songs[index].songName;
});

// listen evnets of songs

audioSong.addEventListener("timeupdate", () => {
  let progress = parseInt((audioSong.currentTime / audioSong.duration) * 100);
  customRange2.value = progress;
  if (progress == 100) {
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
  }
});

customRange2.addEventListener("change", () => {
  audioSong.currentTime = (customRange2.value * audioSong.duration) / 100;
});
//   make all play

function makeallopacity() {
  Array.from(document.getElementsByClassName("playAnimation")).forEach(
    (Element) => {
      Element.style.opacity = 0;
    }
  );
}

//   play song on click

songItem.forEach((Element, index) => {
  Element.addEventListener("click", () => {
    songindex = index;
    Songname.innerText = songs[index].songName;
    document.getElementById("imgchange").src = songs[index].coverPath;
    audioSong.src = `${index + 1}.mp3`;
    audioSong.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    makeallopacity();
    playAnimation[songindex].style.opacity = 1;
  });
});

// forword button work

document.addEventListener("keyup", (Event) => {
  if (Event.key == "ArrowRight") {
    if (songindex >= songs.length - 1) {
      songindex = 0;
    } else {
      songindex++;
    }
    imgchange.src = songs[songindex].coverPath;
    Songname.innerHTML = songs[songindex].songName;
    audioSong.src = `${songindex + 1}.mp3`;
    audioSong.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    makeallopacity();
    playAnimation[songindex].style.opacity = 1;
  }
});
next.addEventListener("click", () => {
  if (songindex >= songs.length - 1) {
    songindex = 0;
  } else {
    songindex++;
  }
  imgchange.src = songs[songindex].coverPath;
  Songname.innerHTML = songs[songindex].songName;
  audioSong.src = `${songindex + 1}.mp3`;
  audioSong.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  makeallopacity();
  playAnimation[songindex].style.opacity = 1;
});
// backforword button work

document.addEventListener("keyup", (Event) => {
  if (Event.key == "ArrowLeft") {
    if (songindex <= 0) {
      songindex = songs.length - 1;
    } else {
      songindex--;
    }
    imgchange.src = songs[songindex].coverPath;
    Songname.innerHTML = songs[songindex].songName;
    audioSong.src = `${songindex + 1}.mp3`;
    audioSong.play();

    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    makeallopacity();
    playAnimation[songindex].style.opacity = 1;
  }
});
previous.addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = songs.length - 1;
  } else {
    songindex--;
  }
  imgchange.src = songs[songindex].coverPath;
  Songname.innerHTML = songs[songindex].songName;
  audioSong.src = `${songindex + 1}.mp3`;
  audioSong.play();

  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  makeallopacity();
  playAnimation[songindex].style.opacity = 1;
});
// time upadte

audioSong.addEventListener("timeupdate", () => {
  let audio_currenttime = audioSong.currentTime;
  let audio_duration = audioSong.duration;

  // End time

  let min = Math.floor(audio_duration / 60);
  let sec = Math.floor(audio_duration % 60);

  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentTimeEnd.innerHTML = `${min}:${sec}`;

  // Start time

  let min1 = Math.floor(audio_currenttime / 60);
  let sec1 = Math.floor(audio_currenttime % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentTimeStart.innerHTML = `${min1}:${sec1}`;
});

// handle play and pause

masterplay.addEventListener("click", () => {
  if (audioSong.paused || audioSong.currentTime == 0) {
    audioSong.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    playAnimation[songindex].style.opacity = 1;
  } else {
    audioSong.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    playAnimation[songindex].style.opacity = 0;
  }
});

// handle pause of play on space key

document.addEventListener("keyup", (event) => {
  if (event.key == " ") {
    if (audioSong.paused || audioSong.currentTime == 0) {
      audioSong.play();
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");

      playAnimation[songindex].style.opacity = 1;
    } else {
      audioSong.pause();
      masterplay.classList.remove("fa-circle-pause");
      masterplay.classList.add("fa-circle-play");
      playAnimation[songindex].style.opacity = 0;
    }
  }
});
