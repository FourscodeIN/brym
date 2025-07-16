  
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
