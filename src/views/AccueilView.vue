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

    <BouttonView> En savoir plus </BouttonView>

    <div class="flex justify-end m-4 items-center">
      <h2 class="m-3 text-center font-fredoka text-3xl  inline-block ">Ou nous trouvez </h2>
      <LocationMarkerIcon class="w-8" ></LocationMarkerIcon> 
    </div>
    
    <div class="flex justify-start m-4 items-center">
      <h2 class="m-3 text-center font-fredoka text-3xl  inline-block ">Nos Invités</h2>
      <UsersIcon class="w-8" ></UsersIcon> 
    </div>


 
<Card
nom="Buju BANTON"
image="../public/artiste/Buju.png"

></Card>

<Card2
nom="Sheensea"
image="../public/artiste/sheensea.png"
></Card2>

<BouttonView> En savoir plus </BouttonView>

  <div class="flex justify-start m-4 items-center">
      <h2 class="m-3 text-center font-fredoka text-3xl  inline-block ">Que faire</h2>
      <ClockIcon class="w-8" ></ClockIcon>
  </div>

    <BouttonView> En savoir plus </BouttonView>


    <div class="flex justify-start m-4 items-center">
      <h2 class="m-3 text-center font-fredoka text-3xl  inline-block ">Qui Sommes nous ?</h2>
        <QuestionMarkCircleIcon class="w-8" ></QuestionMarkCircleIcon> 
  </div>

    <BouttonView> En savoir plus </BouttonView>
    <FooterView/>

  </main>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import BouttonView from "../components/BouttonView.vue";
import {LocationMarkerIcon , UsersIcon,ClockIcon,QuestionMarkCircleIcon } from "@heroicons/vue/solid";
import Card from '../components/Card.vue';
import Card2 from '../components/Card2.vue';
import FooterView from "../components/FooterView.vue";
export default {
  components: { HeaderView, FooterView, BouttonView, Card, Card2, LocationMarkerIcon, UsersIcon, ClockIcon, QuestionMarkCircleIcon,  },
};
</script>
