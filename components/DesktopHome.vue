<template>
<div class="main">

  <div class="mainContent">
    <div class="title-h1">
      <h1>Faites un <strong class="strong">break.</strong> <br>Je m'occupe du reste.</h1>
    </div>
    <div class="hook">
      <NuxtLink to="/about">
        <p>Ambre,  <strong class="strong2">pet sitter</strong> depuis 2023. </p>
      </NuxtLink>
      <p>Assistante vétérinaire depuis 2017.</p>
      <p>Amoureuse des animaux depuis toujours.</p>        
    </div>
  </div>
  <div class="img1">
    <img width="600px" height="400px" src="~/public/images/promenade_chien_petsitter.webp" alt="Chien en balade avec Ambre, Petsitter à Tournefeuille">
  </div>

  <div class="img2">
    <img width="600px" height="400px" src="~/public/images/chien_chat_balade.webp" alt="Chien et chat en balade à Plaisance-du-Touch" loading="lazy">
  </div>

  <div class="area">
    <div class="areaContent">

      <h1 class="area__hook"><strong class="strong2">Visites à domicile,</strong> <br>parce que c'est l'endroit où ils se sentent le mieux.</h1>
      <h1 class="city__title">Mes zones de déplacement</h1>
      <div class=" w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
      </div>
        <div class="city">
          <ul>
            <li>&#128205; Tournefeuille</li>
            <li>&#128205; La Salvetat-Saint-Gilles</li>
            <li>&#128205; Plaisance-du-Touch</li>
            <li>&#128205; Colomiers</li> 
          </ul>
          <div class="button">
            <Button label="Prendre contact" link="/contact" />
          </div>
      </div>
    </div>
  </div>

  <div class="why">
    <p><strong class="strong2 title__why">Une approche différente </strong>
    <br>Plutôt que de perturber leurs habitudes en les envoyant dans une pension, je viens directement chez vous ! </p>
    <p>Vos animaux restent dans un environnement familier, ce qui réduit leur stress et leur permet de se détendre pleinement.
    <br>Et bien sûr, je prends soin de leur santé, vérifiant que tout va bien au quotidien, tout en leur offrant une dose de câlins et d'attentions personnalisées.</p>
    <p>Que vous soyez en vacances, en déplacement ou au travail, vous pouvez partir l’esprit tranquille.</p>
    
    <div class="why__button">
      <Button label="Services et Tarifs" link="/services" />
    </div>
  </div>

  <div class="img3">
    <img width="600px" height="400px" src="~/public/images/visite_chat_domicile.webp" alt="Visite d'un chat à domicile par Ambre, petsitter" loading="lazy">
  </div>

</div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.main{
  margin: 3rem .5rem;
  display: grid;
  grid-template: 
  "mainContent img"
  "img2 area"
  "why img3"
  / 1fr 1fr;
  grid-template-rows: 350px;
  justify-content: center;
  align-items: center;
  background-color: #00000005;
  border-radius: 5px;
}

.mainContent {
  grid-area: mainContent;
  color: var(--clr-black);
  padding: 1rem 0 1rem 2.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title-h1 {
  font-size: var(--size-xl);
  font-weight: 900;
  line-height: calc(1em + 1rem);

}

.hook {
  grid-area: hook;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: var(--clr-black);
  font-size: var(--size-sm);
  font-weight: 600;
}

.area {
  grid-area: area;
  width: 100%;
  height: 100%;
}
.area__hook {
  text-align: center;
  font-size: var(--size-sm);
  font-weight: 600;
  padding: 1.2rem 1rem;
}
.areaContent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.city__title {
  text-align: center;
  color: var(--clr-black);
  font-size: var(--size-lg);
  font-weight: 900;
}

.city {
  margin: 0 0 0 2rem;
  font-size: var(--size-sm);
}

.button {
  padding: .8rem;
}

.why p {
  padding: 1.2rem .8rem;
  text-align: center;
  font-size: var(--size-xs);
}
.title__why {
  font-size: var(--size-base);
}
.why__button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img1,
.img2,
.img3 {
  height: 100%;
  width: 100%;
}

.img1 img,
.img2 img,
.img3 img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.img1 img {
  border-radius: 0 5px 0 0;
}
.img3 img {
  border-radius: 0 5px 5px 0;
}

.gradient {
	background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
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
    width: 98%;
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


@media (min-width: 768px) {
.title-h1 {
  font-size: var(--size-2xl);
  line-height: calc(1em + 2rem);
}

.hook {
  gap: 1rem;
  font-size: var(--size-base);
}

.area__hook {
  font-size: var(--size-base);
  padding: 1.6rem 1rem 0 1.6rem;
}

.city__title {
  font-size: var(--size-xl);
}
  
.city {
  font-size: var(--size-sm);
}

.why p {
  padding: 1rem;
  font-size: var(--size-sm);
}
.title__why {
  font-size: var(--size-lg);
}

}

@media (min-width: 1024px) {

  .main{
    margin: 3rem 2rem;
    grid-template-rows: 420px;
  }
    
  .title-h1 {
    font-size: var(--size-4xl);
    line-height: calc(1em + 2rem);
  }

  .hook {
    gap: 1rem;
    font-size: var(--size-xl);
  }

  .area__hook {
    font-size: var(--size-xl);
    padding: 3rem;
  }

  .city__title {
    text-align: center;
    color: var(--clr-black);
    font-size: var(--size-2xl);
  }
    
  .city {
    font-size: var(--size-lg);
  }

  .button {
    margin: 3rem;
  }

  .why p {
    padding: 1rem;
    font-size: var(--size-lg);
  }
  .title__why {
    font-size: var(--size-2xl);
  }

}


@media (min-width: 1280px) {
  .main{
    margin: 3rem 3rem;
    grid-template-rows: 480px;
  }

}
@media (min-width: 1536px) {

  .main{
    margin: 3rem 4rem;
    grid-template-rows: 550px;
  }
} 
</style>