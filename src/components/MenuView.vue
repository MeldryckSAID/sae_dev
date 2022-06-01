<template>
  <nav>
    <!-- Menu bureau -->

    <div class="bg-warm">
      <div class="mx-auto max-w-7xl">
        <div class="flex justify-between">
          <!-- Menu -->
          <div class="flex space-x-4">
            <!-- Logo -->
            <div class="flex items-center py-5 px-2">
              <RouterLink to="/"> <Logo></Logo></RouterLink>
            </div>

            <!-- Menu -->

            <div class="hidden items-center space-x-1 text-white ipad_pro:flex">
              <div class="flex flex-col items-center">
                <HomeIcon class="w-9" />
                <RouterLink class="block py-2 px-4 hover:text-white" to="/">Home</RouterLink>
              </div>
              <div class="flex flex-col items-center">
                <ClockIcon class="w-9" />
                <RouterLink class="block py-2 px-4 hover:text-white" to="/Programation">Programme</RouterLink>
              </div>
              <div class="flex flex-col items-center">
                <UsersIcon class="w-9" />
                <RouterLink class="block py-2 px-4 hover:text-white" to="/Artistes">Inviter</RouterLink>
              </div>
              <div class="flex flex-col items-center">
                <LogoB></LogoB>
                <RouterLink class="block py-2 px-4 hover:text-white" to="/Festival">Festival</RouterLink>
              </div>
              <div class="flex flex-col items-center">
                <SparklesIcon class="w-9" />
                <RouterLink class="block py-2 px-4 hover:text-white" to="/Concert">Concert </RouterLink>
              </div>
            </div>
          </div>

          <!-- Bouton menu -->
          <div class="flex items-center ipad_pro:hidden">
            <button @click="menuVisible = !menuVisible" class="py-5 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-10 text-cream" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="animate-fadeInLeftBig  duration-1000 ease-out"
      leave-active-class="animate-fadeOutLeftBig  duration-[3s] ease-in"
    >
      <div class="top- fixed left-0 z-50 h-screen w-screen bg-gradient-to-l from-cream to-warm" v-if="menuVisible">
        <div class="top-0 w-max text-black ipad_pro:hidden">
          <div class="flex flex-col items-center border-t-4 border-black bg-cream">
            <HomeIcon class="w-9" />
            <RouterLink class="block py-2 px-4 hover:text-white" to="/">Home</RouterLink>
          </div>
          <div class="flex flex-col items-center border-t-4 border-black bg-cream">
            <ClockIcon class="w-9" />
            <RouterLink class="block py-2 px-4 hover:text-white" to="/Programation">Programme</RouterLink>
          </div>
          <div class="flex flex-col items-center border-t-4 border-black bg-cream">
            <UsersIcon class="w-9" />
            <RouterLink class="block py-2 px-4 hover:text-white" to="/Artistes">Inviter</RouterLink>
          </div>
          <div class="flex flex-col items-center border-t-4 border-black bg-cream">
            <LogoB></LogoB>
            <RouterLink class="block bg-cream py-2 px-4 hover:text-white" to="/Festival">Festival</RouterLink>
          </div>
          <div class="flex flex-col items-center border-t-4 border-black bg-cream">
            <SparklesIcon class="w-9" />
            <RouterLink class="block bg-cream py-2 px-4 hover:text-white" to="/Concert">Concert </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(false);
</script>

<script>
import LogoB from "./LogoB.vue";
import Logo from "./Logo.vue";
import { HomeIcon, ClockIcon, UsersIcon, SparklesIcon } from "@heroicons/vue/solid";
export default {
  components: { HomeIcon, ClockIcon, UsersIcon, SparklesIcon, LogoB, Logo },
};
</script>
