<template>
  <div class="flex items-center justify-evenly">
    <figure>
      <img class="h-48 w-full object-cover" :src="image" alt="" />
      <figcaption class=""></figcaption>
    </figure>
    <div class="flex flex-col items-center">
      <vjr class="rotate-180" />
      <h3 class="inline-block pb-3 text-center font-fredoka text-3xl text-gris">{{ nom }}</h3>
      <vjr />
      <BouttonView2>+</BouttonView2>
    </div>
  </div>
</template>

<script>
import vjr from "./vjr.vue";
import BouttonView2 from "../components/BouttonView2.vue";

export default {
  props: {
    nom: String,
    image: String,
  },
  components: { vjr, BouttonView2 },
};
</script>
