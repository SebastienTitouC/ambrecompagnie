<template>
  <div>
    <img class="img" src="~/public/images/4_bis.jpg" alt="Photo de Ambre et Happy">
    <div class="about">
      <h1 class="title">À propos de moi</h1>
      <p class="description">Assistante vétérinaire depuis 2017, j'ai grandi au milieu des animaux. </p>
      <p class="description">C'est donc tout naturellement que je me suis dirigée vers un métier qui me permettait de prendre soin d'eux. En 2022 suite à la naissance de ma fille j'ai décidé de me lancer dans le pet sitting afin de pouvoir concilier famille et travail.</p>
      <p class="description">Je me propose donc de garder vos animaux chez vous lors de vos absences.</p>
      <p class="description">Étant actuellement encore en poste chez un vétérinaire mes disponibilités sont pour le moment restreintes, n'hésitez pas à réserver tôt.</p>
    </div>

    <div class="about">
      <h1 class="title">Mes poilus</h1>
      <div class="polaroid">
        <figure class="polaroid__figure">
          <img class="polaroid__img" src="~/public/images/5.jpg" alt="Photo de Happy (Chien)" />
          <figcaption>Happy</figcaption>
        </figure>
      </div>
      <p class="description">Happy est arrivé dans la famille en 2016 après 3 ans de box à la SPA de Toulouse. Très craintif envers les humains, avec nous c'est un amour. Sa passion ... la nourriture, il m'échangerait sans hésiter contre une croquettes ou deux.</p>
      <p class="description">Bientôt 13 ans mais toujours une âme de chiot.</p>
      
      <div class="polaroid polaroid2">
          <figure class="polaroid__figure">
            <img class="polaroid__img" src="~/public/images/6.jpg" alt="Photo de Titi (Chat)"/>
            <figcaption>Titi</figcaption>
          </figure>
      </div>  
      <p class="description">Mute est arrivé accidenté à la clinique ou je travaille, il avait 4 mois et sa vie commençait déjà très mal. C'était donc une évidence de l’accueillir chez nous. C'est un chat plutôt câlin et plein de ressource lorsqu'il s'agit de faire des bêtises.</p>
      <p class="description">Il a aujourd'hui 5 ans et malgré sa surdité il se porte très bien.</p>

    </div>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.img {
  object-fit: contain;
  object-position: center;
  width: 100%;
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.75);
  
}
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.title {
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
  font-family: 'Cedarville Cursive';
  font-weight: 400;
  text-align: center;
  margin-top: .6rem;
  font-size: var(--size-4xl);
  color: var(--clr-pink-600)
}
</style>