const playButton = document.getElementById("play-button");
const equalizer = document.querySelector(".equalizer");
const reverseEqualizer = document.querySelector(".reverse-equalizer");
const audio = document.getElementById("audio"); // Assure-toi que l'ID correspond à l'élément audio dans le HTML

let isPlaying = false;

playButton.addEventListener("click", () => {
  if (!isPlaying) {
    // Activer les égaliseurs
    equalizer.classList.add("active");
    reverseEqualizer.classList.add("active");

    // Lire l'audio
    audio
      .play()
      .catch((error) =>
        console.error("Erreur lors de la lecture audio :", error)
      );

    // Mettre à jour le bouton
    playButton.textContent = "Pause";
    isPlaying = true;
  } else {
    // Désactiver les égaliseurs
    equalizer.classList.remove("active");
    reverseEqualizer.classList.remove("active");

    // Mettre en pause l'audio
    audio.pause();

    // Remettre à jour le bouton
    playButton.textContent = "Play";
    isPlaying = false;
  }
});
