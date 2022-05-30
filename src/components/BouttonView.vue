<template>
<div class="  flex 
              justify-end
              p-2">
              
  <div class="relative 
              inline-block 
              items-center 
              gap-2 
              rounded-3xl
             bg-gris 
              p-7 
              py-2.5 
              font-inter
              font-bold
              text-center
             text-yellow-400">
    <p><slot /></p>
  </div>
</div>
  
</template>

<script>
import { MenuIcon } from "@heroicons/vue/solid";

export default {
  name: "App",
  components: { MenuIcon },
};
</script>
