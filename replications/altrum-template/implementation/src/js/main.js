import Alpine from 'alpinejs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
window.Alpine = Alpine;
Alpine.start();

gsap.utils.toArray('main section').forEach((section) => {
  gsap.from(section, { opacity: 0, y: 24, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 88%', once: true } });
});
