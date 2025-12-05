document.addEventListener("DOMContentLoaded", () => {

  /* ============================
      MENU HAMBURGUESA
  ============================ */
  const hamburger = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });

  /* ============================
      INICIALIZAR AOS
  ============================ */
  if (AOS) {
    AOS.init({ duration:1000, once:true });
  }

  /* ============================
      FORMULARIO DE OPINIÓN
  ============================ */
  const feedbackFormPro = document.getElementById("feedbackFormPro");
  const formMessagePro = document.querySelector(".form-message-pro");

  if (feedbackFormPro) {
    feedbackFormPro.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if(!name || !email || !message){
        formMessagePro.style.color="#ff4c4c";
        formMessagePro.textContent="Por favor completa todos los campos.";
        formMessagePro.style.display="block";
        return;
      }

      formMessagePro.style.color="#fff";
      formMessagePro.textContent="¡Gracias por tu opinión! La hemos recibido con éxito.";
      formMessagePro.style.display="block";
      feedbackFormPro.reset();
    });
  }

  /* ============================
      ESTADÍSTICAS ANIMADAS
  ============================ */
  const stats = document.querySelectorAll(".stat-number");
  let statsActivated = false;

  function easeOutQuad(t){ return t*(2-t); }

  function animateStats(){
    if(statsActivated) return;
    statsActivated=true;

    stats.forEach(stat=>{
      const target = parseFloat(stat.getAttribute("data-target"));
      const decimals = target%1!==0?1:0;
      let start=null;

      function step(timestamp){
        if(!start) start=timestamp;
        const progress=timestamp-start;
        const duration=2000;
        const eased=easeOutQuad(Math.min(progress/duration,1));
        stat.textContent=(target*eased).toFixed(decimals);
        if(progress<duration) requestAnimationFrame(step);
        else stat.textContent=target.toFixed(decimals);
      }
      requestAnimationFrame(step);
    });
  }

  const statsSection=document.querySelector(".stats-pro");
  if(statsSection){
    const observerStats = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting) animateStats();
    },{ threshold:0.45 });
    observerStats.observe(statsSection);
  }

  /* ============================
      HOVER ICONS EFECTO
  ============================ */
  const statIcons=document.querySelectorAll(".stat-item i");
  statIcons.forEach(icon=>{
    icon.addEventListener("mouseenter",()=>{
      icon.style.transform="scale(1.3) rotate(10deg)";
      icon.style.color="#00ffd6";
      icon.style.transition="0.4s";
    });
    icon.addEventListener("mouseleave",()=>{
      icon.style.transform="scale(1) rotate(0deg)";
      icon.style.color="#00bfa6";
    });
  });

});
