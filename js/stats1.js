/* ========================================
   STATS.JS PROYECTO 3
   Animación de conteo + scroll + hover
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const stats = document.querySelectorAll(".stat-number");
  let statsActivated = false;

  // Función de easing "ease-out"
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  // Animar estadísticas
  function animateStats() {
    if (statsActivated) return;
    statsActivated = true;

    stats.forEach(stat => {
      const target = parseFloat(stat.getAttribute("data-target"));
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const duration = 2000; // duración en ms
        const easedProgress = easeOutQuad(Math.min(progress / duration, 1));

        if (target % 1 !== 0) {
          stat.textContent = (target * easedProgress).toFixed(1);
        } else {
          stat.textContent = Math.floor(target * easedProgress);
        }

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          stat.textContent = target;
        }
      }

      requestAnimationFrame(step);
    });
  }

  // Activar animación al hacer scroll
  const statsSection = document.querySelector(".stats-pro");
  if (statsSection) {
    const observerStats = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.unobserve(statsSection); // evitar repetir animación
      }
    }, { threshold: 0.45 });

    observerStats.observe(statsSection);
  }

  // Hover en iconos (solo clase CSS)
});
