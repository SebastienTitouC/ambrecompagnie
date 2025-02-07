<template>
  <header class="header">
    <h1 class="enterprise">Ambre & Cie</h1>

    <DesktopNavBar v-if="!isMobile" />
    <MobileNavBar v-else />
  </header>
</template>

<script lang="ts" setup>
const isMobile = ref(true)
let mql:MediaQueryList

function handleMqlChange(e) {
  isMobile.value = e.matches
}

onMounted(() => {
  mql = window.matchMedia('(max-width: 768px)')
  isMobile.value = mql.matches
  mql.addEventListener('change', handleMqlChange)
})

onUnmounted(() => {
  mql.removeEventListener('change', handleMqlChange)
})
</script>

<style scoped>
.header {
    border-bottom: 1px solid var(--clr-white);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    border-bottom: .5px solid var(--clr-black);
    background-image: linear-gradient(88deg, rgba(202, 202, 202,0.02) 0%, rgba(202, 202, 202,0.02) 58%,transparent 58%, transparent 67%,rgba(220, 220, 220,0.02) 67%, rgba(220, 220, 220,0.02) 82%,rgba(8, 8, 8,0.02) 82%, rgba(8, 8, 8,0.02) 100%),linear-gradient(318deg, rgba(19, 19, 19,0.02) 0%, rgba(19, 19, 19,0.02) 5%,transparent 5%, transparent 50%,rgba(101, 101, 101,0.02) 50%, rgba(101, 101, 101,0.02) 65%,rgba(132, 132, 132,0.02) 65%, rgba(132, 132, 132,0.02) 100%),linear-gradient(150deg, rgba(166, 166, 166,0.02) 0%, rgba(166, 166, 166,0.02) 18%,transparent 18%, transparent 37%,rgba(105, 105, 105,0.02) 37%, rgba(105, 105, 105,0.02) 87%,rgba(244, 244, 244,0.02) 87%, rgba(244, 244, 244,0.02) 100%),linear-gradient(53deg, rgba(54, 54, 54,0.02) 0%, rgba(54, 54, 54,0.02) 26%,transparent 26%, transparent 81%,rgba(251, 251, 251,0.02) 81%, rgba(251, 251, 251,0.02) 85%,rgba(19, 19, 19,0.02) 85%, rgba(19, 19, 19,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
}

.enterprise {
  font-family: 'DancingScript';
  font-weight: 500;
  font-size: var(--size-3xl);
  color: var(--clr-red-800);
}


@media (min-width: 1024px) {
  .enterprise {
      font-size: var(--size-4xl);
  }
}

 @media (min-width: 1280px) {
  .enterprise {
      font-size: var(--size-5xl);
  }
}
</style>