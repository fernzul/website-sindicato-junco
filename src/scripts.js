document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbar = document.getElementById("header");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 

      const targetId = this.getAttribute('href').substring(1); 
      const targetElement = document.getElementById(targetId); 

      if (targetElement) {
        const offsetTop = targetElement.offsetTop; 
        const navbarHeight = navbar.offsetHeight;

        window.scrollTo({
          top: offsetTop - navbarHeight,
          behavior: 'smooth'
        });
      }

      if (navbarCollapse.classList.contains("show")) {
        const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
        bootstrapCollapse.hide();
      }
    });
  });
});

// Go to Top
const goToTopButton = document.getElementById("goToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
};

goToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.scroll-animation');

  const checkVisibility = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

// Oculta a navbar ao atingir o footer, parece banal, mas sem isso, quando chega ao footer, trava a navbar...
document.addEventListener('scroll', () => {
  const footer = document.getElementById('footer');
  const navbar = document.getElementById('header');

  const footerPosition = footer.getBoundingClientRect();

  if (footerPosition.top < window.innerHeight && footerPosition.bottom >= 0) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

