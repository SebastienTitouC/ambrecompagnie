<template>
  <div>
    <nav class="nav">
      <ul class="menu">
        <li><NuxtLink class="links" to="/">Accueil</NuxtLink></li>
        <li><NuxtLink class="links" to="/about">Qui suis-je ?</NuxtLink></li>
        <li><NuxtLink class="links" to="/services">Services & Tarifs</NuxtLink></li>
        <li><NuxtLink class="links" to="/cgv">CGV</NuxtLink></li>
        <li><NuxtLink class="links" to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.menu {
    display: flex;
    flex-direction: row;
    gap: .2rem;
}

.links {
    color: var(--clr-black);
    font-size: var(--size-2xl);
    font-family: "DancingScript";
    font-weight: 500;
    border-left: 1px solid transparent;
    border-right: 2px solid transparent;
    transition: background-color .3s ease-in-out, color .3s ease-in, border-radius .3s ease-in, border .3s;
}

.links:hover,
.active__link {
    color: var(--clr-red-600);
    border-radius: 14px 6px 14px 2px;
    filter: none;
    border-bottom: 2px solid var(--clr-black);
    border-right: 2px solid var(--clr-black);
    border-top: 1px solid var(--clr-gray-500);
    border-left: 1px solid var(--clr-gray-500);
}

/* ----- Media query  ----- */
/*  under 768px is Mobile Nav*/

@media (min-width: 1024px) {
  .menu {
    gap: .6rem;
  }
  
  .links {
      font-size: var(--size-3xl);
  }
}

 @media (min-width: 1280px) {
  .menu {
    gap: 1rem;
  }
}

@media (min-width: 1536px) {
  .menu {
    gap: 1.2rem;
  }
}
</style>