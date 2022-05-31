

<template>
    <div>
        <header>
            <HeaderView/>
        </header>

        <main class="bg-cream">
             <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
             <div class="flex justify-center  flex-col m-4 items-center">
             <h2 class="m-3 text-center font-fredoka text-3xl  ">Nos Invités</h2>
             <UsersIcon class="w-10" ></UsersIcon> 
    </div>
             <Card
                nom="Buju Banton"
                image="../public/artiste/buju.png"
             ></Card>
             <Card2
             nom="DJ Yannou"
             image="../public/artiste/Yanou.png"
             ></Card2>
               <Card
                nom="Sheensea"
                image="../public/artiste/sheensea.png"
             ></Card>
              <Card2
             nom="DJ T'Fiish"
             image="../public/artiste/fish.png"
             ></Card2>
              <Card
                nom="Dj Wall-Ice"
                image="../public/artiste/wall.png"
             ></Card>
                           <Card2
             nom="Kalash"
             image="../public/artiste/Kalash.png"
             ></Card2>
        </main>

       
        <footer>
            <FooterView/>
        </footer>
        

       
    </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import BouttonView2 from "../components/BouttonView2.vue";
import { UsersIcon } from "@heroicons/vue/solid";
import Card from "../components/Card.vue";
import Card2 from "../components/Card2.vue";
export default {
  components: { HeaderView, FooterView, BouttonView2, UsersIcon, Card, Card2 },
};

</script>