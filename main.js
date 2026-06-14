const colorMap = {
  "0.png": { bg: "#1a1a1a",   glow: "rgba(200,200,210,0.2)" },
  "1.png": { bg: "#1f1a0e",   glow: "rgba(212,160,23,0.2)"  },
  "2.png": { bg: "#0d0d0d",   glow: "rgba(80,80,90,0.3)"    },
  "3.png": { bg: "#1a1015",   glow: "rgba(214,100,140,0.2)" },
  "4.png": { bg: "#0b1520",   glow: "rgba(30,90,160,0.25)"  },
  "5.png": { bg: "#1a0808",   glow: "rgba(180,20,20,0.25)"  },
  "6.png": { bg: "#1a1008",   glow: "rgba(200,100,30,0.25)" },
  "7.png": { bg: "#12101a",   glow: "rgba(120,80,180,0.25)" },
  "8.png": { bg: "#0d1610",   glow: "rgba(80,180,120,0.2)"  },
  "9.png": { bg: "#0a1410",   glow: "rgba(30,100,60,0.25)"  },
};

function changeImage(el) {
  const mainImg = document.getElementById("mainImage");
  const glowRing = document.getElementById("glowRing");

  // Swap active state
  document.querySelectorAll(".gallery img").forEach(img => img.classList.remove("active"));
  el.classList.add("active");

  // Fade & swap main image
  mainImg.style.opacity = "0";
  mainImg.style.transform = "scale(0.95)";

  setTimeout(() => {
    mainImg.src = el.src;
    mainImg.style.opacity = "1";
    mainImg.style.transform = "scale(1)";
  }, 200);

  // Update background & glow
  const fileName = el.src.split("/").pop();
  const scheme = colorMap[fileName] || colorMap["0.png"];

  document.body.style.background = scheme.bg;
  if (glowRing) {
    glowRing.style.background =
      `radial-gradient(circle, ${scheme.glow} 0%, transparent 70%)`;
  }
}

// Smooth image transition setup
document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("mainImage");
  mainImg.style.transition = "opacity 0.2s ease, transform 0.2s ease";
});
