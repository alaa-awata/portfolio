
  const slider = document.querySelector('.project-slider');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let scrollAmount = 0;

  next.addEventListener('click', () => {
    slider.scrollBy({ left: 320, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({ left: -320, behavior: 'smooth' });
  });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); 
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-items a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; 
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  AOS.init()

  