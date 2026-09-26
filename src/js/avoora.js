import '../css/app.css'
import Alpine from 'alpinejs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
window.Alpine=Alpine
Alpine.data('site',()=>({
  menu:false, faq:null, scrolled:false,
  faqs:[
    ['What services does your agency provide for modern digital brands?','We provide UI/UX design, Webflow development, branding, content strategy, and ongoing optimization support for growing modern businesses.'],
    ['How does your pricing model work for ongoing design services?','We offer three monthly subscription plans, each tailored to different project volumes and business sizes.'],
    ['How quickly will we receive our first design delivery timeline?','Depending on your plan, your first mockup is delivered within 24 to 96 hours.'],
    ['How many revisions are included within each selected pricing plan?','Starter includes 2 revision rounds, Growth includes expanded iterations, and Scale offers unlimited revisions.'],
    ['Do you offer both design and Webflow development services together?','Yes, the team handles both design and Webflow development end to end.'],
    ['Can clients pause or cancel subscriptions anytime without penalty fees?','Plans can be paused or cancelled after the minimum commitment period.']
  ]
}))
document.addEventListener('DOMContentLoaded',()=>{
  Alpine.start()
  window.addEventListener('scroll',()=>document.querySelector('.site-header')?.classList.toggle('scrolled',window.scrollY>20),{passive:true})
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches
  if(reduce)return
  gsap.from('.hero-copy>*',{y:35,opacity:0,duration:.9,stagger:.08,ease:'power3.out'})
  gsap.from('.hero-image',{scale:.96,opacity:0,duration:1.1,ease:'power3.out'})
  gsap.utils.toArray('.section-head,.studio-images figure,.service-grid article,.work-card,.pricing-grid article,.testimonial-track article,.award-list article,.process-grid article,.case-list article,.faq-image,.blog-grid article,.contact-grid>*').forEach(el=>{
    gsap.from(el,{y:45,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})
  })
  gsap.utils.toArray('[data-counter]').forEach(el=>{
    const state={v:0},target=+el.dataset.counter
    gsap.to(state,{v:target,duration:1.5,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true},onUpdate:()=>el.textContent=Math.round(state.v)})
  })
})