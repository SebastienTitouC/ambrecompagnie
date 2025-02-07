<template>
  <div class="home">
    
    <Header />
    <MainContent />
    <!-- <div class="home__background"></div> -->
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts" setup> 
  let interval:NodeJS.Timeout
  const currentImageIndex = ref(0);
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg'
  ];
  const backgroundLayer = useTemplateRef('backgroundLayer');

  const changeBackgroundImage = () => {
    const layer = backgroundLayer.value;
    if (layer) {
      // Ajouter la classe "hidden" pour faire disparaître l'ancienne image
      layer.classList.add('hidden');

      setTimeout(() => {
        // Changer l'image après une courte pause
        layer.style.backgroundImage = `url(${images[currentImageIndex.value]})`;
        layer.classList.remove('hidden'); // Réafficher l'image avec transition
      }, 400); // Temps pour que l'opacité passe à 0 avant de changer l'image

      // Mettre à jour l'index pour la prochaine image
      currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    }
  };

</script>


<style scoped>
/* .home {
  background-image: linear-gradient(134deg, rgba(1, 1, 1,0.02) 0%, rgba(1, 1, 1,0.02) 16%,transparent 16%, transparent 76%,rgba(58, 58, 58,0.02) 76%, rgba(58, 58, 58,0.02) 100%),linear-gradient(215deg, rgba(166, 166, 166,0.02) 0%, rgba(166, 166, 166,0.02) 33%,transparent 33%, transparent 79%,rgba(111, 111, 111,0.02) 79%, rgba(111, 111, 111,0.02) 100%),linear-gradient(303deg, rgba(215, 215, 215,0.02) 0%, rgba(215, 215, 215,0.02) 7%,transparent 7%, transparent 90%,rgba(192, 192, 192,0.02) 90%, rgba(192, 192, 192,0.02) 100%),linear-gradient(302deg, rgba(113, 113, 113,0.02) 0%, rgba(113, 113, 113,0.02) 34%,transparent 34%, transparent 73%,rgba(65, 65, 65,0.02) 73%, rgba(65, 65, 65,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  width: max(100%, 100vw);
  width: 100vw;
  height: 100vh;
}*/
.home__background {
    width: 100vw;
    height: 100vh;
    background-image: url('/public/images/3.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

}

/* .background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 1;
  transition: opacity .5s ease-in-out;
}

.background-layer.hidden {
  opacity: 0;
} */
</style>