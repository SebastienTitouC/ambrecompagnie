<template>
  <div class="wrapper">
    <DesktopHome v-if="!isMobile" />
    <MobileHome v-else />

  </div>
</template>

<script lang="ts" setup>
  const isMobile = ref(true)
  let mql:MediaQueryList

  function handleMqlChange(e) {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mql = window.matchMedia('(max-width: 640px)')
    isMobile.value = mql.matches
    mql.addEventListener('change', handleMqlChange)
  })

  onUnmounted(() => {
    mql.removeEventListener('change', handleMqlChange)
  })

</script>

<style scoped>

</style>