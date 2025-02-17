<template>
  <div>
    <div class="lg__screen bg">
      <img width="630px" height="400px" class="img" src="~/public/images/ambre_petsitter_tournefeuille.webp" alt="Ambre, petsitter à Tournefeuille" loading="lazy">
      <div class="about">
        <h1 class="title">À propos de moi</h1>
        <p class="description">Assistante vétérinaire depuis 2017, j'ai grandi au milieu des animaux. </p>
        <p class="description">C'est donc tout naturellement que je me suis dirigée vers un métier qui me permettait de prendre soin d'eux. En 2022 suite à la naissance de ma fille j'ai décidé de me lancer dans le pet sitting afin de pouvoir concilier famille et travail.</p>
        <p class="description">Je me propose donc de garder vos animaux chez vous lors de vos absences.</p>
      </div>

    </div>

    <div class="about">
      <h1 class="title">Mes poilus</h1>
      <div class="lg__screen">
        <div>
          <div class="polaroid">
            <figure class="polaroid__figure">
              <img width="333px" height="333px" class="polaroid__img" src="~/public/images/chien_petsitter_en_balade.webp" alt="Chien en balade à La salvetat-saint-gilles" loading="lazy"/>
              <figcaption>Happy</figcaption>
            </figure>
          </div>
          <p class="description">Happy est arrivé dans la famille en 2016 après 3 ans de box à la SPA de Toulouse. Très craintif envers les humains, avec nous c'est un amour. Sa passion ... la nourriture, il m'échangerait sans hésiter contre une croquettes ou deux.</p>
          <p class="description">Bientôt 13 ans mais toujours une âme de chiot.</p>
        </div>
        
        <div>
          <div class="polaroid polaroid2">
              <figure class="polaroid__figure">
                <img width="333px" height="333px" class="polaroid__img" src="~/public/images/chat_de_petsitter.webp" alt="Visite d'un chat à Colomiers" loading="lazy"/>
                <figcaption>Titi</figcaption>
              </figure>
          </div>  
          <p class="description">Mute est arrivé accidenté à la clinique où je travaillais, il avait 4 mois et sa vie commençait déjà très mal. C'était donc une évidence de l’accueillir chez nous. C'est un chat plutôt câlin et plein de ressource lorsqu'il s'agit de faire des bêtises.</p>
          <p class="description">Il a aujourd'hui 5 ans et malgré sa surdité il se porte très bien.</p>
        </div>

      </div>

    </div>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.img {
  margin-top: 1rem;
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-height: 400px;
  background-color: var(--clr-gray-bg);
}
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.title {
  font-weight: 800;
  font-size: var(--size-3xl);
  margin-bottom: 1.5rem;
  text-align: center;
}

.description {
  text-align: center;
  margin-bottom: .85rem;
}

.polaroid {
  margin: .5rem auto;
  width: 300px;
  transform: rotate(4deg);
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.polaroid2 {
  transform: rotate(-4deg);
}

.polaroid__figure {
  position: relative;
  padding: 15px;
  box-shadow: 1px 2px 10px black;
}
.polaroid__figure figcaption {
  font-family: 'Cedarville Cursive', "DancingScript", sans-serif;
  font-weight: 400;
  text-align: center;
  margin-top: .6rem;
  font-size: var(--size-4xl);
  color: var(--clr-pink-600)
}

@media (min-width: 475px) {
  .title {
    font-size: var(--size-4xl);
    margin-bottom: 2rem;
  }

  .description {
    font-size: var(--size-lg);
    margin-bottom: 1rem;
  }

  .polaroid {
    width: 350px;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .polaroid__figure {
    padding: 20px;
  }
  .polaroid__figure figcaption {
    margin-top: .8rem;
    font-size: var(--size-5xl);
  }
}

@media (min-width: 640px) {
}

@media (min-width: 768px) {
  .img{
    max-width: none;
    margin: auto;
  }
  .about {
    padding: 1rem 1rem
  }
}

@media (min-width: 1024px) {
  .img{
    max-width: none;
    margin: auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .lg__screen {
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .bg {
    background-color: var(--clr-gray-bg);
  }

  .description {
    padding: .6rem 1.4rem;    
  }
}

@media (min-width: 1280px) {
  .img{
    margin: auto;
  }
  .lg__screen {
    margin: 1.5rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    
  }
  
  .polaroid {
    margin-top: 0;
  }
  
}

@media (min-width: 1536px) {} 
</style>