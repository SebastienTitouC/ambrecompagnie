<template>
  <div class="go__up">
    <a href="#top">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>

    </a>
  </div>
</template>

<script lang="ts" setup>


onMounted(() => {
  const toggleGoUpButton = () => {
    if (window.scrollY > 200) {
      document.querySelector('.go__up')?.classList.add('visible')
    } else {
      document.querySelector('.go__up')?.classList.remove('visible')
    }
};
  
  window.addEventListener('scroll', toggleGoUpButton);
})

</script>

<style scoped>
.go__up {
  position: fixed;
  bottom: 1rem;
  right: -5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--clr-red-600);
  border-radius: 5px;
  color: var(--clr-red-600);
  opacity: .7;
  transition: .3s;
}


.go__up.visible {
  right: 1.5rem;
}
</style>