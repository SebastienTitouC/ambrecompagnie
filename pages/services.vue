<template>
  <div class="services">
    <h1 class="title">Services et Tarifs</h1>
    <p class="hook">Votre compagnon mérite la meilleure attention, même quand vous n'êtes pas là !
    <br>Pour cela, je vous propose deux types de service : </p>
    <ToggleChoice @toggle="(c) => {console.log(c); choice = c }" />
    <div class="one__service">
      <ServiceCard :myChoice="choice"/>
    </div>
    <!-- https://uiverse.io/SnyDeTreves/white-newt-65 -->
  </div>
</template>

<script lang="ts" setup>
const choice = ref(1)
</script>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
  width: 100%;
  text-align: center;
  padding: .4rem 0;
  background-color: rgba(248, 248, 248);
  font-family: 'DancingScript';
  font-size: var(--size-4xl);
}

.hook {
  text-align: center;
}

.one__service {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  background-color: #eeecf6;
}
</style>