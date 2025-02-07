<template>
  <div>
    <div class="choice">
      <div class="toggle"></div>
      <div class="services">
        <p class="service1 active" @click="changeService(1)">Visite à domicile</p>
        <p class="service2" @click="changeService(2)">Promenade chien</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits(['toggle'])

const changeService = (id:number) => {
  const toggle = document.querySelector('.toggle')
  const service1 = document.querySelector('.service1')
  const service2 = document.querySelector('.service2')
  if (toggle && service1 && service2)
    if (id === 1) {
      toggle.classList.remove('switch')
      service1.classList.add('active')
      service2.classList.remove('active')
      emit('toggle', 1)
    } 
    else {
      toggle.classList.add('switch')
      service1.classList.remove('active')
      service2.classList.add('active')
      emit('toggle', 2)
    }
}
</script>

<style scoped>
.choice {
  width: 98vw;
  height: 3rem;
  margin-left: 1vw;
  background-color: green;
  border-radius: 100px;
  margin-top: .5rem;
  position: relative;
  background-color: var(--clr-pink-600-50);
  border: 1px solid var(--clr-pink-600-40);;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.4);
}

.toggle {
  width: 50%;
  height: 100%;
  background-color: var(--clr-white);
  border-radius: inherit;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.toggle.switch {
  transform: translateX(100%);
}

.services {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  font-size: var(--size-lg);
  cursor: pointer;
}

.service1,
.service2 {
  width: 49%;
  height: 100%;
  padding-top: .6rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}
.service1.active, 
.service2.active {
  color: var(--clr-black);
  font-weight: 800;
}
</style>