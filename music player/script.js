const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");
const songTitle = document.getElementById("song-title");
const artist = document.getElementById("artist");
const albumArt = document.getElementById("album-art");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playlistItems = document.querySelectorAll(".playlist-item");

let currentSongIndex = 0;

const songs = [
  { 
    title: "Lover", 
    artist: "Taylor Swift", 
    src: "Lover.mp3", 
    cover: "cover1.jpg" 
  },
  { 
    title: "Paris In Rain", 
    artist: "Lauv", 
    src: "Pari in rain.mp3", 
    cover: "cover2.jpg" 
  },
  { 
    title: "Never Not", 
    artist: "Lauv", 
    src: "Never Not.mp3", 
    cover: "human.jpg" 
  }
];

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  songTitle.textContent = song.title;
  artist.textContent = song.artist;
  albumArt.src = song.cover;
  audio.load();
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function updateProgress() {
  const progressValue = (audio.currentTime / audio.duration) * 100;
  progress.value = progressValue;
}

function changeSong(increment) {
  currentSongIndex += increment;
  if (currentSongIndex < 0) currentSongIndex = songs.length - 1;
  if (currentSongIndex >= songs.length) currentSongIndex = 0;
  loadSong(currentSongIndex);
  audio.play();
  playBtn.textContent = "⏸️";
}

function selectSong(e) {
  const index = parseInt(e.target.getAttribute("data-index"));
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸️";
}

playBtn.addEventListener("click", playPause);
prevBtn.addEventListener("click", () => changeSong(-1));
nextBtn.addEventListener("click", () => changeSong(1));
audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", () => {
  const seekTime = (audio.duration * progress.value) / 100;
  audio.currentTime = seekTime;
});

playlistItems.forEach(item => {
  item.addEventListener("click", selectSong);
});

// Initial load
loadSong(currentSongIndex);
