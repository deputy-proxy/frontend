import Alpine from 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
window.Alpine=Alpine;
Alpine.start();

document.querySelectorAll('.reveal').forEach((el)=>{
  gsap.to(el,{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}});
});
document.querySelectorAll('.process-card').forEach((el,i)=>{
  gsap.fromTo(el,{y:18},{y:0,duration:.8,delay:i*.05,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}});
});
document.querySelectorAll('img').forEach((img)=>{
  img.addEventListener('error',()=>img.classList.add('opacity-0'),{once:true});
});