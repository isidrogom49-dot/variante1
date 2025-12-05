/* ========================================
   STATS.JS - ESTADÍSTICAS PROFESIONALES
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
      const target = +stat.getAttribute("data-target");
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const duration = 2000; // duración en ms
        const easedProgress = easeOutQuad(Math.min(progress / duration, 1));
        stat.textContent = Math.floor(target * easedProgress);
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
    const observerStats = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
      }
    }, { threshold: 0.45 });

    observerStats.observe(statsSection);
  }

  // Hover efecto en iconos
  const statIcons = document.querySelectorAll(".stat-card i");
  statIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.3) rotate(10deg)";
      icon.style.color = "#00ffd6";
      icon.style.transition = "0.4s";
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1) rotate(0deg)";
      icon.style.color = "#00bfa6";
    });
  });

});
