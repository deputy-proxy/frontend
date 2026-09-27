import Alpine from 'alpinejs';
import { gsap } from 'gsap';

window.siteState = () => ({
  menu: false,
  pages: false,
  scrolled: false,
  init() {
    this.scrolled = window.scrollY > 20;
    window.addEventListener('scroll', () => { this.scrolled = window.scrollY > 20; }, { passive: true });
    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => {
      gsap.fromTo(section.children,
        { opacity: 0.001, y: 22 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.04, ease: 'power2.out',
          scrollTrigger: undefined,
          paused: true,
          onComplete: () => {}
        }
      );
    });
  }
});

window.Alpine = Alpine;
Alpine.start();

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', () => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
