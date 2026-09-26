import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
window.Alpine = Alpine
Alpine.start()

document.documentElement.classList.remove('no-js')

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!reduceMotion) {
  gsap.utils.toArray('[data-w-id]').forEach((el) => {
    const style = el.getAttribute('style') || ''
    if (!/opacity:0/.test(style)) return
    gsap.fromTo(el,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
    )
  })

  gsap.utils.toArray('.animate-on-scroll').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: .75, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
  })
}

// Local replacement for the source marquee behavior.
const marqueeItems = gsap.utils.toArray('.marquee-scroll-item')
if (!reduceMotion && marqueeItems.length) {
  gsap.to(marqueeItems, { xPercent: -100, duration: 28, ease: 'none', repeat: -1 })
}

// Local counter behavior where the source exposes count-up targets.
gsap.utils.toArray('.count-up-number-animation').forEach((el) => {
  const target = Number(el.dataset.count || 0)
  if (reduceMotion) { el.textContent = target.toLocaleString(); return }
  const state = { value: 0 }
  gsap.to(state, {
    value: target,
    duration: 1.8,
    ease: 'power1.out',
    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
    onUpdate: () => { el.textContent = Math.round(state.value).toLocaleString() },
  })
})

window.addEventListener('resize', () => ScrollTrigger.refresh())