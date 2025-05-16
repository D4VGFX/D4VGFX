// BODY
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // una sola volta
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => observer.observe(section));
});

// OVERLAY
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); // Cambia se i tuoi link non sono in <nav>

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Impedisce il cambio pagina immediato

        const targetUrl = this.getAttribute("href"); // Prende l'URL di destinazione
        const overlay = document.getElementById("black-overlay");

        overlay.classList.add("fade-out"); // Attiva la dissolvenza

        // Dopo 700ms (durata della transizione), cambia pagina
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 500);
      });
    });
  });