document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     MENU HAMBURGUESA
  ============================ */
  const hamburger = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show"); // Mostrar/Ocultar menú
    hamburger.classList.toggle("active"); // Animación hamburguesa
  });

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });

  /* ============================
     INICIALIZAR AOS
  ============================ */
  AOS.init({
    duration: 1000,
    once: true
  });

  /* ============================
     FORMULARIO DE OPINIÓN
  ============================ */
  const feedbackFormPro = document.getElementById("feedbackFormPro");
  const formMessagePro = document.querySelector(".form-message-pro");

  feedbackFormPro.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessagePro.style.color = "#ff4c4c";
      formMessagePro.textContent = "Por favor completa todos los campos.";
      formMessagePro.style.display = "block";
      return;
    }

    formMessagePro.style.color = "#fff";
    formMessagePro.textContent = "¡Gracias por tu opinión! La hemos recibido con éxito.";
    formMessagePro.style.display = "block";
    feedbackFormPro.reset();
  });

});
