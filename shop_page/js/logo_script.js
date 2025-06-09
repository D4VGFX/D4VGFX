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

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let current = 0;

  function updateSlides(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlides(current);
  });

  updateSlides(current);
});

document.addEventListener("DOMContentLoaded", () => {
  const shopLink = document.querySelector(".shop-hover");

  if (shopLink) {
    shopLink.addEventListener("mouseenter", () => {
      shopLink.style.color = "#8800ff";
    });

    shopLink.addEventListener("mouseleave", () => {
      shopLink.style.color = "#00ffff";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById('version-select');
  const info = document.getElementById('version-info');
  const buyBtn = document.getElementById('buy-btn');
  select.addEventListener('change', () => {
    if (select.value === 'base') {
      info.textContent = '€19,99 — 1 proposta + 1 revisione';
      buyBtn.href = 'https://buy.stripe.com/versione-base';
      buyBtn.style.pointerEvents = 'auto';
      buyBtn.style.opacity = '1';
    } else if (select.value === 'pro') {
      info.textContent = '€49,99 — 3 proposte + 3 revisioni';
      buyBtn.href = 'https://buy.stripe.com/versione-pro';
      buyBtn.style.pointerEvents = 'auto';
      buyBtn.style.opacity = '1';
    } else {
      info.textContent = '';
      buyBtn.href = '#';
      buyBtn.style.pointerEvents = 'none';
      buyBtn.style.opacity = '0.5';
    }
  });
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