import '../css/neurex-3.0.0.css'
import Alpine from 'alpinejs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
window.Alpine = Alpine
window.gsap = gsap

Alpine.data('neurexPage', () => ({
  menu:false,
  features:['Accounts Payable','Procurement','Expense Management','Corporate Cards','Accounting Automation','Ramp Intelligence'],
}))

document.addEventListener('DOMContentLoaded',()=>{
  Alpine.start()
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return

  gsap.from('.nx-hero-copy > *',{y:34,opacity:0,duration:.9,stagger:.08,ease:'power3.out'})
  gsap.from('.nx-hero-visual',{y:42,opacity:0,scale:.97,duration:1.15,delay:.12,ease:'power3.out'})
  gsap.utils.toArray('[data-reveal]').forEach((el)=>{
    gsap.from(el,{y:46,opacity:0,duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}})
  })
  gsap.utils.toArray('[data-float]').forEach((el,i)=>{
    gsap.to(el,{y:i%2?-9:9,duration:2.7+i*.25,repeat:-1,yoyo:true,ease:'sine.inOut'})
  })
  gsap.utils.toArray('[data-count]').forEach((el)=>{
    const target=Number(el.dataset.count); const state={value:0}
    gsap.to(state,{value:target,duration:1.5,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true},onUpdate:()=>el.textContent=Math.round(state.value)})
  })
})
