<template>
  <div class="flex items-center justify-evenly p-3">
    <div class="flex flex-col items-center">
      
      <vjr />
     <h3 class="inline-block pb-3 text-center font-fredoka text-3xl text-gris">{{ nom }}</h3>
      <vjr class="rotate-180" />
     <router-link :to="to">  <BouttonView2>+</BouttonView2></router-link>
    </div>
    <figure>
      <img class="h-48 w-full object-cover" :src="image" alt="" />
      <figcaption class=""></figcaption>
    </figure>
    
  </div>
</template>

<script>
import vjr from "./vjr.vue";
import BouttonView2 from "./BouttonView2.vue";

export default {
  props: {
    nom: String,
    image: String,
    to:{
      type:String,
      default:"/",
    }
  },
  components: { vjr, BouttonView2 },
};
</script>
