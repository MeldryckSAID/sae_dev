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

      <div class="mt-5 flex justify-center p-5">
        <form class="w-full max-w-sm">
          <div class="mb-6 md:flex md:items-center">
            <div class="md:w-1/3">
              <label class="text-Black mb-1 block pr-4 font-bold md:mb-0 md:text-right" for="inline-full-name"> Nom </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="w-full appearance-none rounded border-2 border-red-600 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
                id="inline-full-name"
                type="text"
                placeholder=" Votre Nom"
              />
            </div>
          </div>
          <div class="mb-6 md:flex md:items-center">
            <div class="md:w-1/3">
              <label class="text-Black mb-1 block pr-4 font-bold md:mb-0 md:text-right" for="inline-full-name"> Prénom </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="w-full appearance-none rounded border-2 border-red-600 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
                id="inline-full-name"
                type="text"
                placeholder="Votre Prénom"
              />
            </div>
          </div>

          <div class="mb-6 md:flex md:items-center">
            <div class="md:w-1/3">
              <label class="text-Black mb-1 block pr-4 font-bold md:mb-0 md:text-right" for="inline-full-name"> Mail </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="w-full appearance-none rounded border-2 border-red-600 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
                id="inline-full-name"
                type="text"
                placeholder=" Votre Mail"
              />
            </div>
          </div>

          <div class="flex items-start rounded-md">
            <div class="md:w-1/3">
              <label class="text-Black mb-1 block pr-4 font-bold md:mb-0 md:text-right" for="inline-full-name"> Votre message </label>
            </div>
            <div class="md:w-3/6">
              <textarea
                name="message"
                class="ml-2 block w-full appearance-none rounded-md border-2 border-red-600 bg-gray-200 py-5 px-8 font-inter text-lg leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
                type="text"
                placeholder=" Dites nous tous  "
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          <div class="mb-6 md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <label class="block font-bold text-black md:w-2/3">
              <input class="mr-2 leading-tight" type="checkbox" />
              <span class="text-sm"> Send me your newsletter! </span>
            </label>
          </div>

          <BouttonView>Envoyer</BouttonView>
        </form>
      </div>
      <div>
        <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747580.302048028!2d117.83488022145679!3d23.46961085381541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ef3065c07572f%3A0xe711f004bf9c5469!2sTaiwan!5e0!3m2!1sen!2sfr!4v1654257083394!5m2!1sen!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
import BouttonView from "../components/BouttonView.vue";

export default {
  components: { HeaderView, FooterView, BouttonView },
};
</script>
