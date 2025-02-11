<template>
  <div class="services">
    <h1 class="title">Liste de mes services</h1>
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
  padding: 1.4rem 0 0 0;
  font-size: var(--size-3xl);
  font-weight: 800;
}

.hook {
  text-align: center;
  padding: .5rem .4rem;
}

.one__service {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  background-color: #eeecf6;
}
</style>