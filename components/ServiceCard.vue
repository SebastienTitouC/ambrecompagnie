<template>
  <div>
    <div v-if="myChoice === 1" class="card__service-wrapper">
      <div class="card__service">
        <div class="title__price">
          <h2 class="card__service__title">Visite rapide</h2>
          <h2 class="card__service__price">10€</h2>
        </div>

        <p class="card__service__hook">⚡ Pour les chats timides ou les chats vadrouilleurs. 🍃</p>
        <span class="line"></span>
        <p class="description"><span class="green__tick">✔️</span> Nettoyage de la litière</p>
        <p class="description"><span class="green__tick">✔️</span> Remplissage de la gamelle d'eau</p>
        <p class="description"><span class="green__tick">✔️</span> Repas ou mise à niveau des croquettes</p>
        <p class="description">&nbsp;</p>
        <p class="description"><span class="yellow__tick">✔️</span> Prise de médicament <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Supplément dès le 3ème chat <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Dimanches et jours fériés <span class="card__service__price">+5€</span></p>
        <span class="line"></span>
        <div class="price__description-container">
          <p class="price__description">2 passages par jour : <span class="card__service__price">16€</span></p>
          <Discount :discount__price="20"/>
        </div>
        <p class="card__service__hook">Chaque situation est unique, n'hésitez pas à me contacter pour plus d'informations.</p>
        <NuxtLink class="button" to="/contact">Je réserve !</NuxtLink>
      </div>

      <div class="card__service">
        <div class="title__price">
          <h2 class="card__service__title">Visite confort</h2>
          <h2 class="card__service__price">14€</h2>
        </div>

        <p class="card__service__hook">✨ Pour les chats câlins, joueurs ou coquets qui aiment les petits coups de brosse. 💖</p>
        <span class="line"></span>
        <p class="description"><span class="green__tick">✔️</span> Nettoyage de la litière</p>
        <p class="description"><span class="green__tick">✔️</span> Remplissage de la gamelle d'eau</p>
        <p class="description"><span class="green__tick">✔️</span> Repas ou mise à niveau des croquettes</p>
        <p class="description">&nbsp;</p>
        <p class="description"><span class="lightgreen__tick">✔️</span> Caresses et jeux</p>
        <p class="description"><span class="lightgreen__tick">✔️</span> Brossage</p>
        <p class="description">&nbsp;</p>
        <p class="description"><span class="yellow__tick">✔️</span> Prise de médicament <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Supplément dès le 3ème chat <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Dimanches et jours fériés <span class="card__service__price">+5€</span></p>
        <span class="line"></span>
        <div class="price__description-container">
          <p class="price__description">2 passages par jour : <span class="card__service__price">22€</span></p>
          <Discount :discount__price="21"/>
        </div>
        <p class="card__service__hook">Chaque situation est unique, n'hésitez pas à me contacter pour plus d'informations.</p>
        <NuxtLink class="button" to="/contact">Je réserve !</NuxtLink>
      </div>
    </div>

    <div v-else class="card__service-wrapper">
      <div class="card__service">
        <div class="title__price">
          <h2 class="card__service__title">Balade confort</h2>
          <h2 class="card__service__price">14€</h2>
        </div>

        <p class="card__service__hook">🌿 Une belle sortie pour satisfaire les besoins de votre chien tout en profitant d’un moment agréable ensemble ! 🐾 </p>
        
        <span class="line"></span>
        <p class="description"><span class="green__tick">✔️</span> Remplissage de la gamelle d'eau</p>
        <p class="description"><span class="green__tick">✔️</span> Repas ou mise à niveau des croquettes</p>
        <p class="description"><span class="green__tick">✔️</span> Balade de <strong>30 min</strong></p>
        <p class="description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Energisante ou relaxante, selon profil</p>
        <p class="description">&nbsp;</p>
        <p class="description"><span class="yellow__tick">✔️</span> Prise de médicament <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Supplément dès le 2ème chien <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Dimanches et jours fériés <span class="card__service__price">+5€</span></p>
        <span class="line"></span>
        <div class="price__description-container">
          <p class="price__description">2 balades par jour : <span class="card__service__price">22€</span></p>
          <Discount :discount__price="22"/>
        </div>
        
        <div class="price__description-container">
          <p class="price__description">3 balades par jour : <span class="card__service__price">30€</span></p>
          <Discount :discount__price="29"/>
        </div>
        
        <p class="card__service__hook">Chaque situation est unique, n'hésitez pas à me contacter pour plus d'informations.</p>
        <NuxtLink class="button" to="/contact">Je réserve !</NuxtLink>
      </div>

      <div class="card__service">
        <div class="title__price">
          <h2 class="card__service__title">Balade sportive</h2>
          <h2 class="card__service__price">19€</h2>
        </div>

        <p class="card__service__hook">🌳 L’évasion ultime. Idéal pour les chiens qui ont un grand besoin de se dépenser et d'une vraie dose de fun. 🐕</p>
        <span class="line"></span>
        <p class="description"><span class="green__tick">✔️</span> Remplissage de la gamelle d'eau</p>
        <p class="description"><span class="green__tick">✔️</span> Repas ou mise à niveau des croquettes</p>
        <p class="description"><span class="lightgreen__tick">✔️</span> Balade de <strong>1 heure</strong></p>
        <p class="description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Energisante ou relaxante, selon profil</p>
        <p class="description">&nbsp;</p>
        <p class="description"><span class="yellow__tick">✔️</span> Prise de médicament <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Supplément dès le 2ème chien <span class="card__service__price">+2€/jour</span></p>
        <p class="description"><span class="yellow__tick">✔️</span> Dimanches et jours fériés <span class="card__service__price">+5€</span></p>
        <span class="line"></span>
        <div class="price__description-container">
          <p class="price__description">2 balades par jour : <span class="card__service__price">35€</span></p>
          <Discount :discount__price="8"/>
        </div>
        
        <div class="price__description-container">
          <p class="price__description">3 balades par jour : <span class="card__service__price">48€</span></p>
          <Discount :discount__price="16"/>
        </div>
        <p class="card__service__hook">Chaque situation est unique, n'hésitez pas à me contacter pour plus d'informations.</p>
        <NuxtLink class="button" to="/contact">Je réserve !</NuxtLink>
      </div>
    </div>
  </div>
</template>
<!-- Offrez à votre chien des balades pleines de découvertes et d’énergie ! 
    Je vous propose de venir promener votre chien une à trois fois par jour selon ses besoins. Je peux également m'occuper des repas si votre absence le nécessite. -->

<script lang="ts" setup>
const props = defineProps({
  "myChoice": Number
})

</script>

<style scoped>
.card__service-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  gap: 1rem;
}

.card__service {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 94%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px var(--clr-black);
  background-color: var(--clr-white);

}
.title__price {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem .4rem 0rem;
  font-size: var(--size-2xl);
}
.card__service__title {
  font-weight: 700;
  
}
.card__service__price {
  font-family: 'Courier New', Courier, monospace;
  color: var(--clr-pink-600);
  font-weight: 900;
  font-size: var(--size-sm);
}

.price__description-container {
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: .4rem;
}
.price__description {
  flex-shrink: 0;
  margin-top: .2rem;
  font-weight: 800;
  font-size: var(--size-xl);
}

.title__price .card__service__price {
  font-size: var(--size-3xl);
}
.price__description .card__service__price {
  font-size: var(--size-2xl);
}


.card__service__discount {
  font-size: var(--size-base);
  font-weight: 400;
  color: var(--clr-red-600-60);
}
.card__service__hook {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  padding: 1rem .4rem .5rem .4rem;
}
.description {
  align-self: flex-start;
  margin-left: .8rem;
  padding-top: .3rem;
}

.lightgreen__tick {
  color: transparent; 
  text-shadow: 0 0 0 var(--clr-green-600);
}
.green__tick {
  color: transparent; 
  text-shadow: 0 0 0 var(--clr-green-800)
}

.yellow__tick {
  color: transparent; 
  text-shadow: 0 0 0 orange;
}

.button {
  padding: .8rem 1.2rem;
  background-color: var(--clr-red-600-60);
  border-radius: 100px;
  font-size: var(--size-xl);
  color: var(--clr-white);
  font-weight: 700;
  letter-spacing: -.02rem;
  margin: .8rem .3rem;
  background: linear-gradient(90deg, #d53369 0%, #daaf51 100%);
}

.line {
  width: 90%; 
  height: 1px; 
  margin: 1rem; 
  background-color: #000000A0;
  border-radius: 50%;
}

@media (min-width: 475px) {
  .card__service-wrapper {
    margin-top: 2.5rem;
    gap: 1.5rem;
  }

  .card__service__title {
    font-size: var(--size-3xl);  
  }

  .card__service__price {
    font-size: var(--size-base);
  }

  .price__description {
    font-size: var(--size-2xl);
  }

  .title__price .card__service__price {
    font-size: var(--size-4xl);
  }

  .card__service__hook {
    font-size: var(--size-lg);
    padding: 1rem .6rem .5rem .6rem;
  }

  .description {
    margin-left: 1.6rem;
  }

  .button {
    padding: .8rem 1.2rem;
    font-size: var(--size-xl);
    margin: 1rem .3rem;
  }

  .line {
    width: 85%; 
    height: 1px; 
    margin: 1rem; 
    background-color: #000000A0;
    border-radius: 50%;
  }
}

@media (min-width: 640px) {}

@media (min-width: 768px) {}

@media (min-width: 1024px) {
  .card__service-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    justify-content: start;
    align-items: start;
  }
}

@media (min-width: 1280px) {}

@media (min-width: 1536px) {}
</style>