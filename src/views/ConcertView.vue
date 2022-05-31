<template>
  <div>
    <header>
      <HeaderView />
    </header>
    <main class="bg-cream">
      
    </main>
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";

export default {
  components: { HeaderView, FooterView },
};
</script>
