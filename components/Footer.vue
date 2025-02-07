<template>
  <div class="footer">
    <div class="footer__nav-wrapper">
      <button @click="onclick(1)" class="footer__nav">
        <img class="footer__paw" src="~/assets/icons/paw-fill.png" alt="Image 1">
      </button>
      <button @click="onclick(2)" class="footer__nav">
        <img class="footer__paw" src="~/assets/icons/paw-fill.png" alt="Image 1">
      </button>
      <button @click="onclick(3)" class="footer__nav">
        <img class="footer__paw" src="~/assets/icons/paw-fill.png" alt="Image 1">
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

const onclick = (id) => {
  const homeBackground = document.querySelector('.home__background')

  if (homeBackground) {
    homeBackground.style["background-image"] = `url("/images/${id}.jpg")`

    if (id === 1 )
      homeBackground.style["background-position"] = `bottom`
    else
      homeBackground.style["background-position"] = `top`

  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 4rem;
  left: 0;
  width: 100vw;
}
.footer__nav-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

.footer__nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  transition: all .3s;
}

.footer__nav:hover {
  transform: rotate(8deg);
}

</style>