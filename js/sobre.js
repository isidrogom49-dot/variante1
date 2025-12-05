document.addEventListener("DOMContentLoaded", () => {

  // MENU HAMBURGUESA
  const hamburger = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // TYPING EFFECT HERO
  const textEl = document.querySelector(".typing-text-3");
  const textArray = ["Transformando ideas en soluciones tecnológicas", "Innovación aplicada a proyectos reales"];
  let txtIndex = 0, charIndex = 0;
  function type() {
    if(txtIndex >= textArray.length){ txtIndex = 0; }
    textEl.textContent = textArray[txtIndex].substring(0, charIndex);
    charIndex++;
    if(charIndex > textArray[txtIndex].length){ charIndex=0; txtIndex++; setTimeout(type,1500); }
    else { setTimeout(type,80); }
  }
  type();

  // EFECTO 3D EN VALORES
  const cards = document.querySelectorAll(".value-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(700px) rotateY(${(x-rect.width/2)/25}deg) rotateX(${-(y-rect.height/2)/25}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
    });
  });

  // ANIMACIÓN DE TARJETAS EQUIPO
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-15px) scale(1.03)";
      card.style.boxShadow = "0 20px 50px rgba(0,0,0,0.7)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0px) scale(1)";
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    });
  });

  // INICIALIZAR AOS
  AOS.init({duration:1000, once:true});
});
