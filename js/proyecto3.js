document.addEventListener("DOMContentLoaded", () => {

  /* =========================
       MENÚ HAMBURGUESA
  ========================= */
  const hamburger = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });

  /* =========================
       AOS
  ========================= */
  if (AOS) {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  /* =========================
       ESTADÍSTICAS ANIMADAS
  ========================= */
  const stats = document.querySelectorAll(".stat-number");
  let statsActivated = false;

  function animateStats() {
    if (statsActivated) return;
    statsActivated = true;

    stats.forEach((stat) => {
      const target = parseFloat(stat.getAttribute("data-target"));
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const updateCounter = () => {
        start += increment;
        stat.textContent = start.toFixed(target % 1 !== 0 ? 1 : 0);

        if (start < target) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      };
      updateCounter();
    });
  }

  const statsSection = document.querySelector(".stats-pro");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) animateStats();
  }, { threshold: 0.4 });

  observer.observe(statsSection);

});
