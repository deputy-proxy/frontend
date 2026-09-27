import Alpine from 'alpinejs'

window.siteState = () => ({
  menu: false,
  whatWeDo: false,
  scrolled: false,
  init() {
    const update = () => { this.scrolled = window.scrollY > 24 }
    update()
    window.addEventListener('scroll', update, { passive: true })
  }
})

window.Alpine = Alpine
Alpine.start()
