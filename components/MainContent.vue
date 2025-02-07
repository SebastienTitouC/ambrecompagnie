<template>
  <div class="wrapper">

    <div class="main__content">
        <h1 class="header">Faites un <strong class="strong">break</strong>. <br>Je m'occupe du reste.</h1>
        <br>
        <div class="hook">
          <p>Ambre,  <strong class="strong2">pet sitter</strong> depuis 2023. </p>
          <p>Assistante vétérinaire depuis 2017.</p>
          <p>Amoureuse des animaux depuis toujours.</p>
        </div>
    </div>
    <img class="img" src="~/public/images/1.jpg" alt="Photo de deux chiens">
  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped>
.wrapper {
  position: relative;
  height: calc(100vh - 5rem);
}

.img {
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100vh - 5rem);
  width: auto;
  object-fit: cover;
  object-position: bottom;
  z-index: -99;
}

.header {
  font-size: 2rem;
  font-weight: 900;
}

.hook {
  display: flex;
  flex-direction: column;
  gap: .6rem;
}

.main__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.5rem;
  padding: 4rem 1rem
}

.strong,
.strong2 {
    position: relative;
    color: var(--clr-white);
}

.strong::before ,
.strong2::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-pink-600-60);
    border-radius: 8px 9px 10px 5px;
    transform: rotate(4deg) scale(1.16);
    z-index: -1;
}
.strong2::before {
  background-color: var(--clr-red-600-60);
  transform: rotate(0deg) scale(1.12);
}

</style>