<template>
  <div class="bg-warm text-Blanc text-2xl my-7">
    <ul class="flex flex-col p-3">
      <li>
        <RouterLink to="/Mention">Mentions Légales</RouterLink>
      </li>
      <li> <RouterLink to="/Contact">Nous contacter</RouterLink></li>
    </ul>
    <div class="flex justify-between " >

      <Insta/>
      <Facebook/>
      <Youtube/>
      <Twitter/>

    </div>
  </div>
</template>

<script>
import Facebook from "./résaux/Facebook.vue";
import Insta from "./résaux/Insta.vue";
import Twitter from "./résaux/Twitter.vue";
import Youtube from "./résaux/Youtube.vue";

export default {
  components: { Facebook, Insta, Twitter, Youtube,  },
};
</script>