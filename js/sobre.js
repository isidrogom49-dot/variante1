document.addEventListener("DOMContentLoaded",()=>{

  // TYPING HERO
  const texto = "Innovamos y desarrollamos soluciones tecnológicas a tu medida.";
  const heroSub = document.querySelector(".typing-text-3");
  let index = 0;

  function escribir(){
    if(index < texto.length){
      heroSub.textContent += texto.charAt(index);
      index++;
      setTimeout(escribir, 50);
    }
  }
  escribir();

  // MENU MOBILE
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("show");
  });

  // AOS INIT
  AOS.init({
    duration: 1000,
    once: true
  });

});
