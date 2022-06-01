<template>
    
    <header>
        <HeaderView></HeaderView>
    </header>

    <main class="bg-gris">
        <div>
            
        </div>

    </main>

    <footer>
        <FooterView></FooterView>
    </footer>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
export default {
  components: { HeaderView, FooterView,  },
};
</script>