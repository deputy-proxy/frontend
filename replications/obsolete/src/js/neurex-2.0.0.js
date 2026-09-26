import '../css/neurex-2.0.0.css'
import Alpine from 'alpinejs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

Alpine.data('neurexMenu', () => ({
  open: false,
  toggle() { this.open = !this.open },
  close() { this.open = false },
}))

Alpine.data('neurexAccordion', () => ({
  active: 0,
  toggle(index) { this.active = this.active === index ? null : index },
}))

window.Alpine = Alpine
window.gsap = gsap

document.addEventListener('DOMContentLoaded', () => {
  Alpine.start()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.from('.neurex-hero-copy > *', {
    y: 28,
    opacity: 0,
    duration: .85,
    stagger: .09,
    ease: 'power3.out',
  })

  gsap.from('.neurex-hero-visual', {
    y: 45,
    opacity: 0,
    scale: .97,
    duration: 1.1,
    delay: .18,
    ease: 'power3.out',
  })

  gsap.utils.toArray('.neurex-reveal').forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: .8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 86%',
        once: true,
      },
    })
  })

  gsap.utils.toArray('[data-float]').forEach((element, index) => {
    gsap.to(element, {
      y: index % 2 ? -10 : 10,
      duration: 2.8 + index * .25,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

  gsap.utils.toArray('[data-count]').forEach((element) => {
    const target = Number(element.dataset.count)
    const state = { value: 0 }
    gsap.to(state, {
      value: target,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true },
      onUpdate: () => {
        element.textContent = Math.round(state.value).toLocaleString()
      },
    })
  })
})
