let currentSongIndex = 0;
let songs = [];
const audioPlayer = document.getElementById("audioPlayer");
const songTitle = document.getElementById("songTitle"); // Título de la canción en el HTML
const progressBar = document.getElementById("progressBar");
const playPauseButton = document.getElementById("playPauseButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const songList = document.getElementById("songList");
const repeatButton = document.getElementById("repeatButton");
const shuffleButton = document.getElementById("shuffleButton"); // Botón de aleatorio
let repeatMode = "none"; // Puede ser: "none", "one", "all"

// Cargar las canciones desde la API de Flask
fetch("http://127.0.0.1:5000/api/canciones")
  .then(response => response.json())
  .then(canciones => {
    console.log("Canciones recibidas:", canciones);
    songs = canciones;
    loadSong(currentSongIndex);
  })
  .catch(error => console.error("Error al cargar canciones:", error));

// Función para cargar una canción
function loadSong(index) {
  const song = songs[index];
  // Cambiar el título de la canción en el HTML
  songTitle.textContent = `${song.titulo} - ${song.artista || "Sin artista"}`;

  // Cambiar la fuente del archivo de audio
  const audioSource = document.getElementById("audioSource");
  audioSource.src = `http://127.0.0.1:5000/canciones/${song.archivo}`;

  // Recargar el audio para que use la nueva fuente
  audioPlayer.load();

  // Usamos el evento 'canplaythrough' para asegurarnos de que el audio está listo
  audioPlayer.oncanplaythrough = function() {
    audioPlayer.play();
  };
}

// Función para reproducir o pausar la canción
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    audioPlayer.pause();
    playPauseButton.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

// Función para cambiar a la siguiente canción
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
}

// Función para cambiar a la canción anterior
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
}

// Función para reproducir una canción aleatoria
function playRandomSong() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * songs.length);
  } while (randomIndex === currentSongIndex && songs.length > 1); // Evitar repetir la misma
  currentSongIndex = randomIndex;
  loadSong(currentSongIndex);
  audioPlayer.play();
  updateActiveSong();
}

// Función para alternar el modo de repetición
function toggleRepeatMode() {
  if (repeatMode === "none") {
    repeatMode = "all";
    repeatButton.innerHTML = '<i class="fas fa-redo-alt"></i>'; // 🔁
  } else if (repeatMode === "all") {
    repeatMode = "one";
    repeatButton.innerHTML = '<i class="fas fa-redo"></i><small>1</small>'; // 🔂
  } else {
    repeatMode = "none";
    repeatButton.innerHTML = '<i class="fas fa-redo"></i>'; // 🚫
  }
}

// Evento cuando la canción termina
audioPlayer.onended = function () {
  if (repeatMode === "one") {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  } else if (repeatMode === "all") {
    nextSong(); // sigue con la playlist
  } else {
    if (currentSongIndex < songs.length - 1) {
      nextSong(); // Reproducir siguiente canción
    }
  }
};

// Actualizar la barra de progreso mientras se reproduce la canción
audioPlayer.ontimeupdate = function() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
};

// Función para renderizar la lista de canciones
function renderSongList() {
  songList.innerHTML = ""; // Limpiar lista
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.titulo} - ${song.artista || "Sin artista"}`;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      audioPlayer.play();
      updateActiveSong();
    });
    songList.appendChild(li);
  });
}

// Actualizar la canción activa en la lista
function updateActiveSong() {
  const listItems = document.querySelectorAll(".song-list li");
  listItems.forEach((item, idx) => {
    item.classList.toggle("active", idx === currentSongIndex);
  });
}

// Añadir los eventos de los botones
playPauseButton.addEventListener("click", togglePlayPause);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
shuffleButton.addEventListener("click", playRandomSong);
repeatButton.addEventListener("click", toggleRepeatMode);
