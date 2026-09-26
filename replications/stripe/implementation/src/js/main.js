import Alpine from 'alpinejs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../css/main.css';
gsap.registerPlugin(ScrollTrigger);
window.Alpine=Alpine;
Alpine.start();
gsap.utils.toArray('main section').forEach(section=>{
  const items=section.querySelectorAll('h2,h3,article');
  if(!items.length)return;
  gsap.from(items,{opacity:0,y:18,duration:.55,stagger:.035,ease:'power2.out',scrollTrigger:{trigger:section,start:'top 82%',once:true}});
});