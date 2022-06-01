<template>
  <header>
    <HeaderView />
  </header>

  <main class="bg-cream">
    <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
    <h2 class="m-3 text-center font-fredoka text-3xl">Le Festival</h2>

    <div class="p-5 font-inter">
      <p>Le FAYA festival ? C’est quoi ?</p>
      <br />
      <p>Artistes de prestiges connu par le monde ainsi que certains Artistes locaux .</p>

      <p>Cette année nous vous réservons une suprises ...</p>
    </div>

    <RouterLink to="/Festival"><BouttonView> En savoir plus </BouttonView> </RouterLink>

    <div class="m-4 flex items-center justify-end">
      <h2 class="m-3 inline-block text-center font-fredoka text-3xl">Ou nous trouvez</h2>
      <LocationMarkerIcon class="w-8"></LocationMarkerIcon>
    </div>

    <div class="m-4 flex items-center justify-start">
      <h2 class="m-3 inline-block text-center font-fredoka text-3xl">Nos Invités</h2>
      <UsersIcon class="w-8"></UsersIcon>
    </div>

    <Card nom="Buju BANTON" image=" /artiste/Buju.png"></Card>

    <Card2 to="/Artistes" nom="Sheensea" image=" /artiste/sheensea.png"></Card2>

    <RouterLink to="/Artistes"><BouttonView> En savoir plus </BouttonView> </RouterLink>

    <div class="m-4 flex items-center justify-start">
      <h2 class="m-3 inline-block text-center font-fredoka text-3xl">Que faire</h2>
      <ClockIcon class="w-8"></ClockIcon>
    </div>
    <ul class="text-center">
      <li>16h : Premiere partie</li>
      <li>18h ; Dj de tout horizons</li>
      <li>20h Dj Yanou vous chauffe</li>
      <li>22h : Shensea entre en scene</li>
    </ul>

    <RouterLink to="/Programation"><BouttonView> En savoir plus </BouttonView> </RouterLink>

    <div class="m-4 flex items-center justify-start">
      <h2 class="m-3 inline-block text-center font-fredoka text-3xl">Qui Sommes nous ?</h2>
      <QuestionMarkCircleIcon class="w-8"></QuestionMarkCircleIcon>
    </div>
    <p class="m-4 text-center">
      Une petite association d’ancien étudiants d’outres-mers ayant connu le dépayesement et la différence entre la métropole et nos
      territoires d’outres-mers donc voici un petit bout de chez nous .....
    </p>

    <RouterLink to="/Contact"><BouttonView> En savoir plus </BouttonView> </RouterLink>

    <FooterView />
  </main>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import BouttonView from "../components/BouttonView.vue";
import { LocationMarkerIcon, UsersIcon, ClockIcon, QuestionMarkCircleIcon } from "@heroicons/vue/solid";
import Card from "../components/Card.vue";
import Card2 from "../components/Card2.vue";
import FooterView from "../components/FooterView.vue";
export default {
  components: { HeaderView, FooterView, BouttonView, Card, Card2, LocationMarkerIcon, UsersIcon, ClockIcon, QuestionMarkCircleIcon },
};
</script>
