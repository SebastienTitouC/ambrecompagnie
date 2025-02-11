<template>
  <div class="container">
    <span class="icon">
      <svg width="9" height="19" viewBox="0 0 19 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="pink" fill-rule="evenodd" clip-rule="evenodd" d="M18.0808 0C16.5161 0 15.0277 0.67567 13.9977 1.8535L1.34101 16.3268C-0.480869 18.4102 -0.442043 21.5311 1.4311 23.5685L14.0068 37.247C15.034 38.3642 16.4822 39 17.9998 39H20.2725V0L18.0808 0ZM11.361 23.4843C13.5614 23.2888 15.1868 21.3465 14.9912 19.146C14.7957 16.9455 12.8534 15.3202 10.6529 15.5157C8.45245 15.7113 6.82711 17.6536 7.02263 19.8541C7.21815 22.0545 9.16049 23.6799 11.361 23.4843Z">
        </path>
      </svg>
    </span>
    <span class="percent">-{{ discount__price }}% </span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    "discount__price":Number  
  })
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  gap: 0;
  transform: rotate(-8deg);
}

.icon path{
  fill: var(--clr-red-600);
}

.percent {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 19px;
  font-size: var(--size-xs);
  color: var(--clr-white);
  background-color: var(--clr-red-600); 
  padding: 0 .2rem;
}
</style>