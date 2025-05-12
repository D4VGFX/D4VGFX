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
