import Alpine from 'alpinejs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.Alpine = Alpine
Alpine.start()

document.documentElement.classList.remove('no-js')

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function revealElements() {
  const elements = gsap.utils.toArray('[data-w-id]').filter((el) => {
    const style = el.getAttribute('style') || ''
    return /opacity\s*:\s*0/.test(style)
  })

  elements.forEach((el, index) => {
    const isHero = el.classList.contains('hero-v3')
    const isHeroContent = el.classList.contains('inner-container---560px')
    const start = isHero || isHeroContent ? 'top 96%' : 'top 88%'

    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        yPercent: isHero ? 0 : 10,
        filter: isHero ? 'blur(8px)' : 'blur(0px)',
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        filter: 'blur(0px)',
        duration: isHero ? 1 : 0.8,
        delay: isHero ? 0 : Math.min(index * 0.015, 0.3),
        ease: 'power2.out',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
        clearProps: 'opacity,visibility,transform,filter',
      },
    )
  })

  ScrollTrigger.refresh()
}

function initCounters() {
  gsap.utils.toArray('.count-up-number-animation').forEach((el) => {
    const target = Number(el.dataset.count || 0)

    if (reduceMotion) {
      el.textContent = target.toLocaleString()
      return
    }

    const state = { value: 0 }

    gsap.to(state, {
      value: target,
      duration: 1.8,
      ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      onUpdate: () => {
        el.textContent = Math.round(state.value).toLocaleString()
      },
    })
  })
}

function initMotion() {
  if (reduceMotion) {
    gsap.set('[data-w-id]', { clearProps: 'opacity,visibility,transform,filter' })
    initCounters()
    return
  }

  revealElements()
  initCounters()
}

window.addEventListener('load', () => {
  document.fonts?.ready?.then(() => {
    initMotion()
    ScrollTrigger.refresh()
  }) ?? initMotion()
})

window.addEventListener('resize', () => ScrollTrigger.refresh())
