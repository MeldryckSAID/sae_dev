<template>
  <header>
    <HeaderView></HeaderView>
  </header>

  <main class="bg-warm">
   
 
      <h1 class="m-5 mt-0 p-20 text-center font-fredoka text-4xl text-cream">Faya Festival <br> <span class="text-red-600">Te présente ces excuses</span> </h1>
      <div class="flex items-center">
        <EmojiSadIcon class="text-green-800"></EmojiSadIcon>
        <EmojiSadIcon class="text-yellow-400"></EmojiSadIcon>
        <EmojiSadIcon class="text-red-600"></EmojiSadIcon>
      </div>
   
  </main>

  <footer>
    <FooterView></FooterView>
  </footer>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import Logo from "../components/Logo.vue";
import { EmojiSadIcon } from "@heroicons/vue/solid";
export default {
  components: { HeaderView, FooterView, Logo, EmojiSadIcon },
};
</script>
