import '../css/neurex-4.0.1.css'
import Alpine from 'alpinejs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
window.Alpine = Alpine
window.gsap = gsap

const logos = [
  { src:'https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eff75a7f89eedbe6867b18_Logo%2017.svg', alt:'Unicell' },
  { src:'https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eff75b07892edafc505b40_Logo%2014.svg', alt:'Walter' },
  { src:'https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eff75ad2d425d6ea348e98_Logo%2015.svg', alt:'Monosen' },
  { src:'https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eff75af0f9371047fdfeee_Logo%2016.svg', alt:'Overcut' },
  { src:'https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eff75aee53b19b82a68aaf_Logo%2013.svg', alt:'Primex' },
  { src:'https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eff75aaa022f8bba17f005_Logo%2019.svg', alt:'Boomers' },
  { src:'https://cdn.prod.website-files.com/68d00020514c84ecf2846fef/68eff75b07892edafc505b3b_Logo%2018.svg', alt:'Reverse' }
]

Alpine.data('neurexPage', () => ({
  menu:false,
  scrolled:false,
  logos,
  features:['Accounts Payable','Procurement','Expense Management','Corporate Cards','Accounting Automation','Ramp Intelligence'],
}))

document.addEventListener('DOMContentLoaded', () => {
  Alpine.start()

  const updateHeader = () => {
    const root = document.querySelector('[x-data="neurexPage"]')
    if (root?._x_dataStack?.[0]) root._x_dataStack[0].scrolled = window.scrollY > 24
  }
  window.addEventListener('scroll', updateHeader, { passive:true })
  updateHeader()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.from('[data-hero-copy] > *', {
    y:32, opacity:0, duration:.85, stagger:.08, ease:'power3.out'
  })
  gsap.from('[data-hero-art]', {
    y:42, opacity:0, scale:.975, duration:1.1, delay:.1, ease:'power3.out'
  })

  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y:42,
      opacity:0,
      duration:.8,
      ease:'power3.out',
      scrollTrigger:{ trigger:el, start:'top 86%', once:true }
    })
  })

  gsap.utils.toArray('[data-float]').forEach((el, index) => {
    gsap.to(el, {
      y:index % 2 ? -9 : 9,
      duration:2.7 + index * .2,
      repeat:-1,
      yoyo:true,
      ease:'sine.inOut'
    })
  })

  gsap.utils.toArray('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count)
    const state = { value:0 }
    gsap.to(state, {
      value:target,
      duration:1.45,
      ease:'power2.out',
      scrollTrigger:{ trigger:el, start:'top 88%', once:true },
      onUpdate:() => { el.textContent = Math.round(state.value) }
    })
  })

  gsap.to('.nx-logo-track', {
    xPercent:-50,
    duration:28,
    repeat:-1,
    ease:'none',
    modifiers:{ xPercent: gsap.utils.wrap(-50, 0) }
  })
})
