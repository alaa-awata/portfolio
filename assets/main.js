
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

// Mobile Navigation Functionality
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

// Toggle mobile navigation
mobileNavToggle.addEventListener('click', () => {
  mobileNav.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close mobile navigation
mobileNavClose.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
});

// Close mobile navigation when clicking on a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Close mobile nav first
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      
      // Smooth scroll to target section
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300); // Small delay to ensure nav is closed
    }
  });
});

// Close mobile navigation when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close mobile navigation on window resize (if screen becomes larger)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  }
});

  