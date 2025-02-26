/************************************************************
 * script.js
 * -----------
 * 1) Matrix Rain Animation
 * 2) Sticky Nav on Scroll
 * 3) Smooth Scroll for Nav Links
 * 4) Optional Typewriter Effect in the Hero Subheading
 ************************************************************/

// 1) MATRIX RAIN ANIMATION
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
const drops = [];
const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * canvas.height;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // reset drop
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Adjust canvas on resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
  }
});

// 2) STICKY NAV ON SCROLL
const mainNav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    mainNav.classList.add("scrolled");
  } else {
    mainNav.classList.remove("scrolled");
  }
});

// 3) SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll(".nav-links a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // offset for sticky nav
        behavior: "smooth"
      });
    }
  });
});

// 4) OPTIONAL TYPEWRITER EFFECT FOR HERO SUBHEADING
const typedTextEl = document.getElementById("typed-text");
const typedText = "Hack the Planet. Protect the Future.";
let index = 0;

function typeWriter() {
  if (index < typedText.length) {
    typedTextEl.textContent += typedText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", () => {
  typeWriter();
});