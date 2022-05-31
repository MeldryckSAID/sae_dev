<template>
  <div>
    <HeaderView />
    <main class="bg-cream">
      <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
      <div class="m-4 flex flex-col items-center justify-center">
        <h2 class="m-3 text-center font-fredoka text-3xl">Festival</h2>
      </div>
      <p class="m-3 p-4">
        En soi ce festival existe depuis quelques temps . Mais c’est une premiere qu’ils soit aussi grand et important avec des Artistes de
        prestiges connu par le monde ainsi que certains de nos habituer .
      </p>
      <p class="m-3 p-4">Cette année nous vous réservons une suprises ...</p>

      <h2 class="m-3 text-center font-fredoka text-3xl">Invités</h2>

      <Card nom="Buju Banton" image="  /artiste/buju.png"></Card>
      <Card2 nom="DJ Yannou" image="  /artiste/Yanou.png"></Card2>
      <Card nom="Sheensea" image="  /artiste/sheensea.png"></Card>
      <Card2 nom="DJ T'Fiish" image="  /artiste/fish.png"></Card2>
      <Card nom="Dj Wall-Ice" image="  /artiste/wall.png"></Card>
      <Card2 nom="Kalash" image="  /artiste/Kalash.png"></Card2>

       <h2 class="m-3 text-center font-fredoka text-3xl">Mais ou ?</h2>
       <div class=" p-4 list-disc">
          <p> Eh bien dans les villes suivantes </p>
       <ul>
         <li>Montpellier</li>
         <li>Bordeaux</li>
         <li>Rennes</li>
         <li>Besançons</li>
       </ul>
       <p>Nous vous attendons nombreux connaisseurs ou pas </p>
       </div>
      


    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import Card from "../components/Card.vue";
import Card2 from "../components/Card2.vue";

export default {
  components: { HeaderView, FooterView,Card2,Card },
};
</script>
