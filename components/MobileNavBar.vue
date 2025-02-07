<template>
  <div>
    <button @click="toggleMenu" class="mobile__nav-wrapper" :class="{mobile__nav_open: isMenuOpen}">
      <div class="mobile__nav"></div>
      <div class="mobile__nav"></div>
      <div class="mobile__nav"></div>
    </button>

    <div class="menu_open" :class="{menu_close: !isMenuOpen}">
      <nav class="nav">
      <ul class="menu">
        <li><a class="links active" href="">Accueil</a></li>
        <li><a class="links" href="">Qui suis-je ?</a></li>
        <li><a class="links" href="">Services & Tarifs</a></li>
        <li><a class="links" href="">CGV</a></li>
        <li><a class="links" href="">Contact</a></li>
      </ul>
    </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.mobile__nav-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: .8rem .2rem;  
}

.mobile__nav {
  width: 38px;
  height: 3px;
  background-color: var(--clr-black);
  border-radius: 6px;
  transition: all .4s;  
}

.mobile__nav_open div:nth-child(1) {
  transform: translateY(13px) rotate(-45deg);
}
.mobile__nav_open div:nth-child(2) {
  transform: rotate(45deg);
}
.mobile__nav_open  div:nth-child(3) {
  transform: translateY(-13px) rotate(-45deg);
}


.menu_open {
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100vw;
  height: max(calc(100vh - 5rem), 550px);
  background-color: var(--clr-white);
  background-image: linear-gradient(134deg, rgba(1, 1, 1,0.02) 0%, rgba(1, 1, 1,0.02) 16%,transparent 16%, transparent 76%,rgba(58, 58, 58,0.02) 76%, rgba(58, 58, 58,0.02) 100%),linear-gradient(215deg, rgba(166, 166, 166,0.02) 0%, rgba(166, 166, 166,0.02) 33%,transparent 33%, transparent 79%,rgba(111, 111, 111,0.02) 79%, rgba(111, 111, 111,0.02) 100%),linear-gradient(303deg, rgba(215, 215, 215,0.02) 0%, rgba(215, 215, 215,0.02) 7%,transparent 7%, transparent 90%,rgba(192, 192, 192,0.02) 90%, rgba(192, 192, 192,0.02) 100%),linear-gradient(302deg, rgba(113, 113, 113,0.02) 0%, rgba(113, 113, 113,0.02) 34%,transparent 34%, transparent 73%,rgba(65, 65, 65,0.02) 73%, rgba(65, 65, 65,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  z-index: 999;
}

.menu_close {
  display: none;
}

.nav {
  width: 100%;
  height: calc(100% - 5rem);
}

.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 5rem;
  gap: 2.5rem;
}
li {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.links {
  color: var(--clr-black);
  font-size: var(--size-2xl);
  font-family: 'DancingScript';
  font-weight: 500;
  width: min(60%, 250px);
}

.links.active {
    color: var(--clr-red-600);
    border-bottom: 2px solid var(--clr-black);
    border-right: 2px solid var(--clr-black);
    border-top: 1px solid var(--clr-gray-500);
    border-left: 1px solid var(--clr-gray-500);
    border-radius: 14px 6px 14px 2px;
    filter: none;
}
</style>