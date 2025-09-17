  document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Toggle menú responsive
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");  
  const contNav = document.getElementById("contNav");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isMobile = window.innerWidth < 1024;
      menu.classList.toggle("hidden");

      if (!menu.classList.contains("hidden") && isMobile) {
        menu.classList.add("flex", "flex-col", "space-y-4", "mt-4");
        menu.classList.remove("space-x-6");
        contNav.classList.replace("h-16", "h-40");
      } else if (isMobile) {
        menu.classList.remove("flex", "flex-col", "space-y-4", "mt-4");
        menu.classList.add("space-x-6");
        contNav.classList.replace("h-40", "h-16");
      }
    });
  }

  // Navbar con background al hacer scroll
  const nav = document.getElementById("mainNav");
  const header = document.querySelector("header");
  if (nav && header) {
    window.addEventListener("scroll", () => {
      const triggerHeight = header.offsetHeight;
      nav.classList.toggle("bg-[#030404]", window.scrollY >= triggerHeight);
    });
  }

  // Animación de barras de progreso
  const bars = document.querySelectorAll(".progress-bar");
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = "0";
        setTimeout(() => {
          entry.target.style.width = entry.target.dataset.width;
        }, 100);
      } else {
        entry.target.style.width = "0"; // reinicia al salir
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => barObserver.observe(bar));

  // Hover transition dinamic
  // const links = document.querySelectorAll("a");

  // links.forEach(link => {
  //     link.addEventListener("mouseenter", () => {
  //     link.style.transform = "scale(1.1)";
  //     link.style.transition = "transform 0.2s ease";
  //   });
  //   link.addEventListener("mouseleave", () => {
  //     link.style.transform = "scale(1)";
  //   });
  // });

  // Botón volver arriba
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("hidden", window.scrollY < 400);
    });
  }

  // Parallax
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  const handleParallax = () => {
    if (window.innerWidth > 768) {
      window.addEventListener("scroll", () => {
        window.requestAnimationFrame(() => {
          parallaxEls.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            el.style.transform = `translateY(${window.scrollY * speed}px)`;
          });
        });
      });
    }
  };
  handleParallax();
  window.addEventListener("resize", handleParallax);

  // AOS
  AOS.init({
    once: false, 
    duration: 800,
    offset: 120,
    easing: "ease-in-out"
  });
});

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");
    preloader.addEventListener("transitionend", () => preloader.remove());
  }
});

