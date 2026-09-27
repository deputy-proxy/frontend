import Alpine from 'alpinejs';
import { gsap } from 'gsap';

window.siteState = () => ({
  menu: false,
  pages: false,
  scrolled: false,
  init() {
    this.scrolled = window.scrollY > 20;
    window.addEventListener('scroll', () => { this.scrolled = window.scrollY > 20; }, { passive: true });
    gsap.from('header', { y: -18, opacity: 0, duration: 0.7, ease: 'power2.out' });
    gsap.from('#home h1', { y: 28, opacity: 0, duration: 1, delay: 0.15, ease: 'power3.out' });
    gsap.from('#home .max-w-\\[830px\\] a', { y: 16, opacity: 0, duration: 0.6, delay: 0.45, stagger: 0.08, ease: 'power2.out' });
  }
});

window.Alpine = Alpine;
Alpine.start();
