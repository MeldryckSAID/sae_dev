<template>

  
  

  <RouterView />
</template>

<script>
import FooterView from './components/FooterView.vue';
import HeaderView from './components/HeaderView.vue';
export default {
  components: { FooterView, HeaderView },
};
</script>
