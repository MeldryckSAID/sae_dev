<template>
    <div>
        <header>
            <HeaderView/>
        </header>

        <main class="bg-cream">
             <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
             <h2 class="m-3 text-center font-fredoka text-3xl">Des Questions ? <br> Nous contacter ici.</h2>
             <BouttonView2 >+</BouttonView2>


        </main>
        
        <footer>
            <FooterView/>
        </footer>
        

       
    </div>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import BouttonView2 from "../components/BouttonView2.vue";

export default {
  components: { HeaderView, FooterView, BouttonView2 },
};

</script>
