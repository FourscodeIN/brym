  
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setTimeout(() => reiniciarAnimacionesAOS(), 800);
      }
    });
  });

  document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("navbar-menu");
    menu.classList.toggle("hidden");
  });

  const nav = document.getElementById('mainNav');
  const header = document.querySelector('header');

    if (!nav || !header) return;

    window.addEventListener('scroll', function () {
      const triggerHeight = header.offsetHeight;

      if (window.scrollY >= triggerHeight) {
        nav.classList.add('bg-[#030404]');
      } else {
        nav.classList.remove('bg-[#030404]');
      }
    });

  const links = document.querySelectorAll("a");

  links.forEach(link => {
      link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.1)";
      link.style.transition = "transform 0.2s ease";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });
  AOS.init({
    once: false,
    mirror: true, 
    duration: 800,
    offset: 120,
    easing: 'ease-in-out'
  });
});

function reiniciarAnimacionesAOS() {
  const elementos = document.querySelectorAll('[data-aos]');
  elementos.forEach(el => {
    el.classList.remove('aos-animate');
  });

  setTimeout(() => {
    AOS.refresh(); 
    AOS.refreshHard(); 
  }, 50);
}
