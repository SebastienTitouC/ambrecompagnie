<template>
  <div class="wrapper">
    <div v-if="isMounted">
      <DesktopHome v-if="!isMobile" />
      <MobileHome v-else />
    </div>

  </div>
</template>

<script lang="ts" setup>
  const isMobile = ref(true)
  const isMounted = ref(false)
  let mql:MediaQueryList

  function handleMqlChange(e) {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mql = window.matchMedia('(max-width: 640px)')
    isMobile.value = mql.matches
    mql.addEventListener('change', handleMqlChange)
    isMounted.value = true
  })

  onUnmounted(() => {
    mql.removeEventListener('change', handleMqlChange)
  })

</script>

<style scoped>

</style>