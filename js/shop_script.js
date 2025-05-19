document.addEventListener("DOMContentLoaded", () => {
  // === Fade-in observer ===
  const sections = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // === Overlay logic for nav links and buy buttons ===
  const overlay = document.getElementById("black-overlay");

  // Seleziona TUTTI i link della navbar + tutti i .buy-button (con qualsiasi colore)
  const clickableElements = document.querySelectorAll("nav a, .buy-button");

  clickableElements.forEach(el => {
    el.addEventListener("click", function (e) {
      const targetUrl = this.getAttribute("href");

      // Se c'è un URL valido (evita i link con href="#")
      if (targetUrl && targetUrl !== "#") {
        e.preventDefault();

        overlay.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = targetUrl;
        }, 500);
      }
    });
  });
});