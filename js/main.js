document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll('.menu a');


  const activateMenu = () => {
    let current = window.scrollY < 200 ? 'home' : '';
    document.querySelectorAll('section[id]').forEach(sec => {
      const top = sec.offsetTop - 130;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.id;
      }
    });
    menuLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', activateMenu);
  activateMenu();


  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: 'smooth'
        });
      }
    });
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });


  document.querySelectorAll('.animate, .step-card, .image-card, .final-card, h2').forEach(el => {
    observer.observe(el);
  });

});

const burger = document.getElementById("burger-btn");
  const menu = document.getElementById("menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
  });
