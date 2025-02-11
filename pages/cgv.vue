<template>
  <div class="cgv">
    <h1 class="title">Conditions générales de vente</h1>
  
  <UAccordion color="pink" variant="solid" :items="items">
    <template 
      #item="{ item }">
      <p class="italic text-gray-900 dark:text-white text-center">
        {{ item.description }}
      </p>
    </template>

    <template #info>
      <div class="info">
        <p style="text-indent: 25px;">Les conditions générales de vente sont disponibles en ligne ci-dessous, ou en téléchargement ci-après :</p>
        <div style="width: 100%; display: flex; justify-content: center; margin: 1rem 0;">
          <UButton class="download" :loading="isLoading" @click="downloadCGV" color="amber" size="lg" icon="i-heroicons-arrow-down-tray" label="  Télécharger les CGV" />
        </div>
      </div>
    </template>

    <template #presentation>
      <div>
        <p>La prestation se compose de la pré-visite, les visites et la restitution des clés en fin de
          période.</p>
        
        <p>Concernant les visites, la prestation comprend :</p>
          <li>• Le renouvellement de l’eau et de la nourriture.</li>
          <li>• Le nettoyage ou remplacement de la litière.</li>
          <li>• Un temps de présence auprès des animaux pour les jeux et/ou les câlins.</li>
          <li>• Des services annexes tels que des nouvelles par SMS, l’ouverture/fermeture des volets ou rideaux.</li>
          <li>• Une balade proche du domicile du client</li>
        
        <p>La prestation peut comprendre en supplément :</p>
          <li>• Des soins d’hygiène comme le nettoyage des yeux ou des oreilles et des soins médicaux sur prescription du vétérinaire.</li>
        
        <p>Les consignes seront données lors de la pré-visite.</p>
        <p>La prestation de promenade pour chien consiste à se rendre à votre domicile pour prendre votre chien et l'emmener en promenade selon les horaires définis dans le contrat de prestation de service.</p>
      </div>
    </template>

    <template #engagements-client>
      <div>
        <p>Le Client s’engage à fournir :</p>
        <li>• Un jeu de clés en état de fonctionnement ainsi que le code d'accès à l'immeuble le cas échéant et toutes informations nécessaires pour entrer au domicile.</li>
        <li>•	Le nom d'une personne à contacter en cas de problème au domicile du Client.</li>
        <li>•	Le carnet de santé de l'animal.</li>
        <li>•	Les coordonnées du vétérinaire de l'animal, le client m'autorisant cependant expressément à conduire l’animal chez un autre vétérinaire.</li>
        <li>•	Une cage de transport.</li>
        <li>•	Dans des quantités suffisantes la litière, la nourriture, les produits d’hygiène et d’entretien nécessaire à l’animal et ses accessoires (brosse, jouets, pelle à litière, produits de nettoyage, etc.), le cas échéant l’ensemble du traitement médical ainsi que l’ordonnance prescrite par un vétérinaire.</li>
        <li>•	Pour la promenade chien, un collier et une laisse en bon état ainsi que des sacs permettant de ramasser les déjections.</li>
        <p>Tout achat nécessaire à la bonne réalisation de la prestation devra être remboursé par le client. Ces frais seront majorés par un coût de déplacement en plus de la facturation des produits achetés.</p>
        <p>Confirmer son retour au pet sitter, par SMS, et ainsi valider la fin de la prestation, sans quoi celle-ci se poursuivra automatiquement et sera donc facturée en supplément.</p>
        <p>En cas de maladie, le client s'engage à informer en détails le pet sitter de l'état de santé de l'animal. Le pet sitter se réserve le droit de refuser la prestation notamment en cas de maladies contagieuses pouvant contaminer les autres chats de la clientèle comme le Typhus ou le Coryza ou de l’accepter si la maladie est clairement identifiée par un vétérinaire et non-transmissible.</p>
        <p>En cas de besoin, le client donne tous pouvoirs au pet sitter pour prendre les mesures nécessaires afin de préserver la santé de l’animal en le conduisant chez son vétérinaire ou un vétérinaire de garde si son état de santé semble l’imposer. Les frais vétérinaires et de déplacement seront à la charge du Client et devront être remboursés sur présentation de la facture correspondante.</p>
        <p>Le Client atteste posséder une assurance habitation ainsi qu’une assurance responsabilité civile pour les dommages causés par son animal.</p>

      </div>
    </template>

    <template #engagements-petsitter>
      <div>
        <p>Le pet sitter ne pourra être tenu responsable des dommages de toute nature survenant à l’animal ou des dommages causés par celui-ci lorsqu’il est seul au domicile du Client durant la prestation.</p>
        <p>Le pet sitter s’engage à contacter le Client si l’animal venait à tomber malade ou se blesser durant la prestation, mais ne saurait en être tenue pour responsable.</p>
        <p>Le pet sitter s’engage à ne divulguer aucune information à un tiers concernant le Client.</p>
      </div>
    </template>


    <template #pre-visite>
      <div>
        <p>Pour tout nouveau Client, le pet sitter effectue une pré-visite obligatoire à domicile.</p>

        <p>Elle permet :</p>
        <li>•	D’avoir un premier contact avec le Client et ainsi remplir une fiche de renseignements.</li>
        <li>•	D'avoir un premier contact avec l'animal, de connaître ses besoins particuliers, ses habitudes.</li>
        <li>•	Donner les instructions écrites concernant la prestation à réaliser (dates d’exécution de la prestation, conditions particulières et prestations supplémentaires souhaitées par le Client et acceptées par le pet sitter).</li>
        <li>•	De répondre aux différentes interrogations du Client.</li>
        <li>•	De remettre un jeu de clés en état de fonctionnement ainsi que le code d'accès à l'immeuble le cas échéant et toutes informations nécessaires pour entrer au domicile.</li>
        <li>•	De signer ou non l’autorisation de diffusion des photos/vidéos de l’animal sur les réseaux sociaux</li>

        <p>Tous ces renseignements permettront d’établir et de signer, s’il y a accord, un contrat de prestation de service établit en deux exemplaires et remis en fin de pré-visite.</p>
        <p>A l’issue de la pré-visite, le pet sitter se réserve le droit de refuser la prestation.</p>
      </div>
    </template>

    <template #tarifs>
      <div>
        <p>Le Client devra s’acquitter de la prestation de service de la manière suivante :</p>
        <li>•	Lors de la pré-visite, après avoir signé le contrat de prestation de service, le client devra verser 30% du montant total de la prestation (acompte).</li>
        <li>•	En fin de prestation de service, une facture définitive du montant total de la prestation pourra être établie incluant les prestations exceptionnelles et dont la charge incombe au Client.</li>
        <p>Le pet sitter accepte le règlement par chèque ou en espèces (prévoir l’appoint).</p>
      </div>
    </template>

    <template #annulation>
      <div>
        <p>En cas d’annulation de la prestation par le Client avant la pré-visite, aucune prestation ne sera facturée.</p>
        <p>En cas d’annulation de la prestation par le Client entre la pré-visite et avant l’exécution de la prestation, l'acompte de 30% du montant total de la prestation versés lors de la pré-visite, restera définitivement acquis au pet sitter.</p>
        <p>En cas de retour anticipé (avant la date prévue au contrat de prestation de service) :</p>
        <li>•	Le Client s’engage à en informer le pet sitter le plus tôt possible.</li>
        <li>•	L'acompte de 30% du montant total de la prestation versés lors de la pré-visite, restera définitivement acquis au pet sitter.</li>
        <li>•	Une facture définitive pourra être établie en fonction des visites effectuées. Si celle-ci est inférieure au montant de l’acompte, aucun remboursement ni avoir ne sera effectué.</li>
        
        <p>En cas de poursuite de la prestation (après la date prévue au contrat de service et/ou si le retour du client n'est pas confirmé comme précisé dans l'article 2) :</p>
        <li>•	Le Client s’engage à en informer le pet sitter le plus tôt possible. Le pet sitter sera libre d’accepter ou non cette demande.</li>
        <li>•	La prestation sera effectuée aux mêmes conditions établies lors du contrat initial et facturée en supplément suivant le tableau des tarifs de prestation.</li>
        
        <p>En cas d’annulation de la prestation par le pet sitter entre la pré-visite et avant l’exécution des prestations, le montant de l'acompte, versé lors de la pré-visite sera remboursé. Dans ce cas, aucune demande de dommages et intérêts ne pourra être réclamée au pet sitter.</p>

      </div>
    </template>

    <template #clef>
      <div>
        <p>La remise d’un jeu de clé devra s’effectuer par le Client au moment de la pré-visite ou lors de la prestation « remise de clés et/ou signature de contrat ». Cette remise ne s’effectuera qu’en main propre.</p>
        <p>La restitution du jeu de clé au Client s’effectuera à la fin de la prestation de service lors de la facturation. Cette remise ne s’effectuera qu’en main propre.</p>
        <p>Le pet sitter se réserve le droit d'imposer des plages horaires.</p>
        <p>Le pet sitter n’acceptera pas de déposer des clés chez un tiers ou dans une boite aux lettres.</p>
      </div>
    </template>
  
  </UAccordion>

  </div>  
</template>

<script lang="ts" setup>


const isLoading = ref(true)
let timeout

onMounted (() => {
  timeout = setTimeout(() => {isLoading.value = false}, 1000)
})

const downloadCGV = () => {
  window.open('/cgv/ConditionsGeneralesDeVente.pdf', '_blank')
};

const items = [{
  label: 'En ligne  / Téléchargement',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  slot: 'info'
  },
  {
  label: '1- Présentation de la prestation de service',
  slot: 'presentation'
  },
  {
    label: '2- Engagements, obligations et responsabilités du client',
    slot: 'engagements-client'
  },
  {
    label: '3- Engagements, obligations et responsabilités du pet sitter',
    slot: 'engagements-petsitter'
  },
  {
    label: '4- Pré-visite',
    slot: 'pre-visite'
  },
  {
    label: '5- Tarifs et Paiement',
    slot: 'tarifs'
  },
  {
    label: '6- Annulation, retour anticipé ou poursuite de la prestation',
    slot: 'annulation'
  },
  {
    label: '7- Remise et restitution des clés',
    slot: 'clef'
  }
]
</script>

<style scoped>
.cgv {
  padding: 1rem .6rem;
  color: var(--clr-black);
}
.title {
  text-align: center;
  font-size: var(--size-2xl);
  font-weight: 800;
  padding: 1.4rem .6rem;
}

li {
  text-indent: 15px;
  color: var(--clr-gray-600);
  margin: 0 .6rem;
}
li:last-child {
  margin-bottom: 1rem;
}

p {
  margin-top: .8rem;
  margin-bottom: .2rem;
  font-weight: 600;
  color: var(--clr-black);
}

.download {

  align-self: center;
}
</style>