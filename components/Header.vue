<template>
  <header class="header">
    <NuxtLink to="/"><h1 class="enterprise">Ambre & Cie</h1></NuxtLink>

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
    mql = window.matchMedia('(max-width: 1024px)')
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
    height: 4rem;
}

.enterprise {
  font-family: 'DancingScript';
  font-weight: 500;
  font-size: var(--size-3xl);
  color: var(--clr-red-800);
}

@media (min-width: 475px) {
  .enterprise {
    font-size: var(--size-4xl);
  }
}

@media (min-width: 640px) {
  .enterprise {
    font-size: var(--size-5xl);
  }
}

@media (min-width: 768px) {}

@media (min-width: 1024px) {
  .header {
    height: 5rem;
  }
}

 @media (min-width: 1280px) {
  .enterprise {
      font-size: var(--size-6xl);
  }
}

@media (min-width: 1536px) {} 

</style>