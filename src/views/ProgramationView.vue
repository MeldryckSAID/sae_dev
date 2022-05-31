<template>
  <div>
    <HeaderView />
    <main class="bg-cream">
      <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
      <div class="m-4 flex flex-col items-center justify-center">
        <h2 class="m-3 text-center font-fredoka text-3xl">Programmation</h2>
        <ClockIcon class="w-10"></ClockIcon>
      </div>
      <div class="mt-5 items-center p-10">
        <div class="flex justify-center pb-5">
          <Gvjr />
        </div>
        <div class="my-5 flex items-center justify-around">
          <Gvjr class="-rotate-90" />
          <ul>
            <li>Bordeaux 11/02/2022</li>
            <li>Rennes 15/02/2022</li>
            <li>Montpelier 18/02/2022</li>
            <li>Besançon 21/02/2022</li>
          </ul>
          <Gvjr class="rotate-90" />
        </div>

        <div class="flex rotate-180 justify-center p-5">
          <Gvjr />
        </div>
      </div>
    </main>
    <FooterView />
  </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import { ClockIcon } from "@heroicons/vue/solid";
import Gvjr from "../components/Gvjr.vue";

export default {
  components: { HeaderView, FooterView, ClockIcon, Gvjr },
};
</script>
