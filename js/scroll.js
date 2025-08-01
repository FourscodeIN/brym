  
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

  // Toggle menú responsive
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("hidden"));
  }

  const nav = document.getElementById("mainNav");
  const header = document.querySelector("header");
  if (nav && header) {
    window.addEventListener("scroll", () => {
      const triggerHeight = header.offsetHeight;
      nav.classList.toggle("bg-[#030404]", window.scrollY >= triggerHeight);
    });
  }

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

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("hidden", window.scrollY < 400);
    });
  }

  document.addEventListener("scroll", () => {
    document.querySelectorAll("[data-parallax]").forEach(el => {
      const speed = parseFloat(el.getAttribute("data-parallax")) || 0.5;
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
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

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("opacity-0", "pointer-events-none", "transition-opacity", "duration-500");
    setTimeout(() => preloader.remove(), 500);
  }
});
