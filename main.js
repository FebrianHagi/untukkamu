window.onload = () => {
  // hidupkan animasi
  document.body.classList.remove("container");
};

// audio handler
const music = document.getElementById("bg-music");

function playMusic() {
  if (!music) return;

  music.volume = 0.35;
  music.play().catch((err) => {
    console.log("Audio blocked:", err);
  });

  // hanya sekali
  document.removeEventListener("click", playMusic);
  document.removeEventListener("keydown", playMusic);
  document.removeEventListener("touchstart", playMusic);
}

// SEMUA kemungkinan gesture
document.addEventListener("click", playMusic);
document.addEventListener("keydown", playMusic);
document.addEventListener("touchstart", playMusic);

const icons = ["💖", "🌸", "✨", "💕", "💐", "💘"];

function createFloatingIcon() {
  const container = document.getElementById("floating-icons");
  if (!container) return;

  const icon = document.createElement("span");
  icon.className = "floating-icon";
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];

  icon.style.left = Math.random() * 100 + "vw";
  icon.style.animationDuration = 6 + Math.random() * 4 + "s";
  icon.style.fontSize = 1.5 + Math.random() * 1.5 + "rem";

  container.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 10000);
}

// interval muncul
setInterval(createFloatingIcon, 700);
