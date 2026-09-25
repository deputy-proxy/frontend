import './src/css/app.css'
import Alpine from 'alpinejs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.Alpine = Alpine
window.gsap = gsap

Alpine.data('mobileMenu', () => ({
  open: false,
  toggle() {
    this.open = !this.open
    document.body.classList.toggle('overflow-hidden', this.open)
  },
  close() {
    this.open = false
    document.body.classList.remove('overflow-hidden')
  },
}))

Alpine.data('faq', () => ({
  active: null,
  toggle(index) {
    this.active = this.active === index ? null : index
  },
}))

document.addEventListener('DOMContentLoaded', () => {
  Alpine.start()

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  gsap.from('.hero-reveal', {
    y: 42,
    opacity: 0,
    duration: 1,
    stagger: .08,
    ease: 'power3.out',
  })

  gsap.from('.hero-art', {
    scale: .94,
    opacity: 0,
    duration: 1.2,
    delay: .15,
    ease: 'power3.out',
  })

  gsap.utils.toArray('[data-reveal]').forEach((element) => {
    gsap.from(element, {
      y: 56,
      opacity: 0,
      duration: .9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 84%',
        once: true,
      },
    })
  })

  gsap.utils.toArray('[data-parallax]').forEach((element) => {
    gsap.to(element, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    })
  })

  gsap.utils.toArray('[data-counter]').forEach((element) => {
    const target = Number(element.dataset.counter)
    const suffix = element.dataset.suffix ?? ''
    const prefix = element.dataset.prefix ?? ''
    const state = { value: 0 }

    gsap.to(state, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        once: true,
      },
      onUpdate: () => {
        element.textContent = prefix + Math.round(state.value) + suffix
      },
    })
  })
})
