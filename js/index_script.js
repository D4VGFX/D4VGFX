// BODY
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // rimuove l'effetto dopo la prima animazione
        }
      });
    }, {
      threshold: 0.2 // quanto della sezione deve entrare nello schermo
    });

    sections.forEach(section => observer.observe(section));
  });
// 1ST SECTION
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo3d");
  const shadow = document.getElementById("logoShadow");

  let startTime = null;
  const amplitude = 10;
  const duration = 5000;

  function animateFluctuation(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const t = (elapsed % duration) / duration;

    const ease = Math.sin(Math.PI * t);

    const y = -amplitude * ease;
    logo.style.transform = `translateY(${y}px)`;

    const shadowScale = 0.8 + ease * 0.4;
    const shadowOpacity = 0.15 + ease * 0.5;

    shadow.style.transform = `scale(${shadowScale}, ${shadowScale / 3})`;
    shadow.style.opacity = shadowOpacity.toFixed(2);

    requestAnimationFrame(animateFluctuation);
  }

  requestAnimationFrame(animateFluctuation);
});

// 2ND SECTION
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo3d-1");
  const shadow = document.querySelector(".logo-shadow-1");

  let startTime = null;
  const amplitude = 10;
  const duration = 5000;

  function animateFluctuation(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const t = (elapsed % duration) / duration;
    const ease = Math.sin(Math.PI * t);

    const y = -amplitude * ease;
    if (logo) logo.style.transform = `translateY(${y}px)`;

    const shadowScale = 0.8 + ease * 0.4;
    const shadowOpacity = 0.15 + ease * 0.5;

    if (shadow) {
      shadow.style.transform = `scale(${shadowScale}, ${shadowScale / 3})`;
      shadow.style.opacity = shadowOpacity.toFixed(2);
    }

    requestAnimationFrame(animateFluctuation);
  }

  requestAnimationFrame(animateFluctuation);
});

// 3RD SECTION
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo3d-2");
  const shadow = document.querySelector(".logo-shadow-2");

  let startTime = null;
  const amplitude = 10;
  const duration = 5000;

  function animateFluctuation(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const t = (elapsed % duration) / duration;
    const ease = Math.sin(Math.PI * t);

    const y = -amplitude * ease;
    if (logo) logo.style.transform = `translateY(${y}px)`;

    const shadowScale = 0.8 + ease * 0.4;
    const shadowOpacity = 0.15 + ease * 0.5;

    if (shadow) {
      shadow.style.transform = `scale(${shadowScale}, ${shadowScale / 3})`;
      shadow.style.opacity = shadowOpacity.toFixed(2);
    }

    requestAnimationFrame(animateFluctuation);
  }

  requestAnimationFrame(animateFluctuation);
});