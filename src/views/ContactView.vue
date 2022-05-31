<template>
  <div>
    <header>
      <HeaderView />
    </header>

    <main class="bg-cream">
      <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
      <h2 class="m-3 text-center font-fredoka text-3xl">
        Des Questions ? <br />
        Nous contacter ici.
      </h2>
      <div class="flex flex-col items-center">

        <form action="flex flex-col">

          <div class="p-5">
            <label for="fname">Nom  </label>
            <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom" />
          </div>

          <div class="p-5">
            <label for="fname">  prénom</label>
            <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom" />
          </div>

          <div class="p-5">
            <label for="sujet">Sujet</label>
            <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message" />
          </div>
          
          <div class="p-5">
            <label for="emailAddress">Email</label>
            <input id="emailAddress" type="email" name="email" placeholder="Votre email" />
          </div>

          <div class="p-5 flex">
            <label  for="subject">Message</label>
            <textarea id="subject" name="subject" placeholder="Votre message" style="height: 200px"></textarea>
          </div>

        </form>
      </div>
    </main>

    <footer>
      <FooterView />
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
