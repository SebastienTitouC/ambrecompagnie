<template>
  <div>
    <div class="link-wrapper">
      <NuxtLink class="link"  :to="link">
        <span class="link__text">{{ label }}</span>
        <svg class="link__paws" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"><ellipse transform="rotate(-6.212 96.651 75.058)" cx="96.65" cy="75.06" rx="7.46" ry="10.19" ></ellipse><ellipse transform="rotate(-3.438 45.482 24.473)" cx="45.49" cy="24.46" rx="7.7" ry="10.06"></ellipse><ellipse transform="rotate(-83.131 62.972 30.562)" cx="62.97" cy="30.56" rx="9.6" ry="7.7"></ellipse><ellipse transform="rotate(-13.239 27.21 27.8)" cx="27.21" cy="27.8" rx="7.83" ry="10.74"></ellipse><path d="M89.66 94.36c15.11-8.45 32.4 3.47 30.13 12.58c-2.44 9.76-11.73 4.5-18.68 7.04c-4.27 1.56-10.79 10.32-18.3 4.97c-6.55-4.67-3.01-19.08 6.85-24.59z"></path><path d="M38.16 40.41c10.8-2.83 25.86 5.56 24.14 15.13c-1.62 9.01-14.14 5.08-19.22 6.97c-6.62 2.46-14.92 9.71-19.64 2.46c-5.32-8.19 5.24-22.07 14.72-24.56z"></path><ellipse transform="rotate(-30 12.909 40.928)" cx="12.91" cy="40.93" rx="7.71" ry="9.95"></ellipse><ellipse transform="rotate(-30 79.075 82.363)" cx="79.08" cy="82.36" rx="8.01" ry="10.19"></ellipse><ellipse transform="rotate(-35.353 67.223 97.302)" cx="67.22" cy="97.3" rx="7.46" ry="10.19"></ellipse><ellipse transform="rotate(-3.533 115.05 78.335)" cx="115.06" cy="78.32" rx="7.43" ry="9.46"></ellipse></g>
        </svg>
        <svg class="link__paws2" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"><ellipse transform="rotate(-6.212 96.651 75.058)" cx="96.65" cy="75.06" rx="7.46" ry="10.19" ></ellipse><ellipse transform="rotate(-3.438 45.482 24.473)" cx="45.49" cy="24.46" rx="7.7" ry="10.06"></ellipse><ellipse transform="rotate(-83.131 62.972 30.562)" cx="62.97" cy="30.56" rx="9.6" ry="7.7"></ellipse><ellipse transform="rotate(-13.239 27.21 27.8)" cx="27.21" cy="27.8" rx="7.83" ry="10.74"></ellipse><path d="M89.66 94.36c15.11-8.45 32.4 3.47 30.13 12.58c-2.44 9.76-11.73 4.5-18.68 7.04c-4.27 1.56-10.79 10.32-18.3 4.97c-6.55-4.67-3.01-19.08 6.85-24.59z"></path><path d="M38.16 40.41c10.8-2.83 25.86 5.56 24.14 15.13c-1.62 9.01-14.14 5.08-19.22 6.97c-6.62 2.46-14.92 9.71-19.64 2.46c-5.32-8.19 5.24-22.07 14.72-24.56z"></path><ellipse transform="rotate(-30 12.909 40.928)" cx="12.91" cy="40.93" rx="7.71" ry="9.95"></ellipse><ellipse transform="rotate(-30 79.075 82.363)" cx="79.08" cy="82.36" rx="8.01" ry="10.19"></ellipse><ellipse transform="rotate(-35.353 67.223 97.302)" cx="67.22" cy="97.3" rx="7.46" ry="10.19"></ellipse><ellipse transform="rotate(-3.533 115.05 78.335)" cx="115.06" cy="78.32" rx="7.43" ry="9.46"></ellipse></g>
        </svg>
        </NuxtLink>
      </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    "label":String,
    "link":String
  })
</script>

<style scoped>
.link-wrapper {
  width:fit-content;
  padding: .8rem 1rem;
}

.link {
  position: relative;
  overflow: hidden;
  color: var(--clr-white);
  background-color: #ffffff2e;
  background-color: #A61C5E;
  border-radius: 8px;
  padding: .6rem 1.5rem;
  border: 1px solid var(--clr-pink-600);
}

.link__text {
  font-size: var(--size-lg);
  font-weight: 800;
  font-family:'Nunito', sans-serif;
}

.link__paws,
.link__paws2  {
  overflow: hidden;
  position: absolute;
  top: -2px;
  right: -58px; 
  width: 80%;
  height: 80%;
  fill: #ffffff50;
}

.link__paws2 {
  top: 10px;
  left: -58px; 
}

</style>