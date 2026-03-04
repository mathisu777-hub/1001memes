const memes = [
  "https://i.imgur.com/vlV6AGm.jpeg",
  "https://i.imgur.com/SnHJRLn.jpeg",
  "https://i.imgur.com/p78N0PE.jpeg",
  "https://i.imgur.com/ficKrQM.png"
  // añade todos los memes que quieras
];

const memeImg = document.getElementById("meme");

function showRandomMeme() {
  const randomIndex = Math.floor(Math.random() * memes.length);
  memeImg.style.opacity = 0; // fade out
  setTimeout(() => {
    memeImg.src = memes[randomIndex];
    memeImg.style.opacity = 1; // fade in
  }, 200);
}

// mostrar un meme al cargar la página
window.onload = showRandomMeme;

// cambiar automáticamente cada 5 segundos
setInterval(showRandomMeme, 5000);
