import Alpine from 'alpinejs'
window.siteState=()=>({menu:false,whatWeDo:false,scrolled:false,init(){this.scrolled=window.scrollY>24;window.addEventListener('scroll',()=>this.scrolled=window.scrollY>24,{passive:true})}})
window.Alpine=Alpine
Alpine.start()
