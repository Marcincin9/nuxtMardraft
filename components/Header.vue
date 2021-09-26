<template>
<nav :class="{ 'scrolled': !view.atTopOfPage }" 
    class="fixed w-full m-auto top-0 animated">
<header class="bgHeader lg:flex lg:justify-evenly">
   
    <div class="flex items-center justify-between px-6 py-7 ">
         <div class="text-2xl">
            <a href="/"><span class="font-black text-yellow-300">Mardraft </span>
            <span class="font-thin hidden-xs hidden-sm hidden-md">Marcin Olszynski</span>
            </a>
         </div>
         <div>
           <button @click="isOpen = !isOpen" class="menu lg:hidden" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
               <svg width="50" height="50" viewBox="0 0 100 100">
                  <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path class="line line2" d="M 20,50 H 80" />
                  <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
               </svg>
           </button>
         </div>
    </div>
          <div :class="isOpen ? 'block' : 'hidden'" class="px-6 py-7 lg:flex items-center">
            <NuxtLink class="block px-4 rounded hover:text-yellow-300"  to="/">HOME</NuxtLink> 
            <NuxtLink class="block px-4 rounded hover:text-yellow-300" to="/projects">PROJECTS</NuxtLink>
            <NuxtLink class="block px-4 rounded hover:text-yellow-300" to="/contact">CONTACT</NuxtLink>
         </div>
                
  </header>
 </nav> 
</template>

<script>
export default {
  layout: 'default',
// in data, I like to store a view object with all 
// the values I need for a component to manage 
// it's 'view' state - ie loading, 
// or in this case, if the user is at the top of the page or not
data () {
    return {
        isOpen: false,
        view: {
            atTopOfPage: true
        }
    }
},

// a beforeMount call to add a listener to the window
beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},

methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
}
};
</script>

<style>


nav {
    z-index: 4;
}

nav.scrolled {
    @apply shadow-2xl;
    border-bottom: 0px;
}


.bgHeader {
  background:  #08434A;
  color: #e4e4e4;
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  /* display: flex; */
  padding: 0;
}
.line {
  fill: none;
  stroke: #FCD34D;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
</style>