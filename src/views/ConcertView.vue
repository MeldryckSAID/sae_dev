<template>
  <div>
    <header>
      <HeaderView />
    </header>
    <main class="bg-cream">
      <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
      <div class="m-4 flex flex-col items-center justify-center">
        <h2 class="m-3 text-center font-fredoka text-3xl">Le concert</h2>
        <SparklesIcon class="w-9" />
      </div>
      <p class="p-4 font-inter text-xl">
        Le show sera exclusive vos artistes dancehall préférez assurons le spectacle afin de vous ambiancez
      </p>

      <h3 class="m-3 text-center font-fredoka text-3xl text-green-800">Jour 3</h3>
      <Card nom="Buju Banton" image="  /artiste/buju.png"></Card>

      <h3 class="m-3 stroke-black stroke-2 text-center font-fredoka text-3xl text-yellow-300">Jour 2</h3>
      <Card2 nom="Shenseea" image="  /artiste/sheensea.png"></Card2>

      <h3 class="m-3 text-center font-fredoka text-3xl text-red-600">Jour 1</h3>
      <Card class="pb-5" nom="Kalash" image="  /artiste/kalash.png"></Card>
    </main>
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import Card from "../components/Card.vue";
import Card2 from "../components/Card2.vue";
import { SparklesIcon } from "@heroicons/vue/solid";

export default {
  components: { HeaderView, FooterView, SparklesIcon, Card, Card2 },
};
</script>
