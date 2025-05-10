// BODY
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo3d");
  const shadow = document.getElementById("logoShadow");

  let startTime = null;
  const amplitude = 20;
  const duration = 5000;

  function animateFluctuation(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const t = (elapsed % duration) / duration;

    const ease = Math.sin(Math.PI * t);

    const y = -amplitude * ease;
    logo.style.transform = `translateY(${y}px)`;

    const shadowScale = 1 + ease * 0.55;
    const shadowOpacity = 0.15 + ease * 0.5;

    shadow.style.transform = `scale(${shadowScale}, ${shadowScale / 2})`;
    shadow.style.opacity = shadowOpacity.toFixed(2);

    requestAnimationFrame(animateFluctuation);
  }

  requestAnimationFrame(animateFluctuation);
});
