
// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".gallery img,.about,#contact").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

// Image Click Zoom
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.9);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:99999;
      cursor:pointer;
    `;

    const big = document.createElement("img");
    big.src = img.src;
    big.style.maxWidth = "90%";
    big.style.maxHeight = "90%";
    big.style.borderRadius = "15px";

    overlay.appendChild(big);
    document.body.appendChild(overlay);

    overlay.onclick = () => overlay.remove();
  });
});
