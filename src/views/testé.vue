<template>
  <header>
    <HeaderView />
  </header>
  <main class="bg-cream">
    <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
    <h2 class="m-3 text-center font-fredoka text-3xl">Chercher vos artiste</h2>
    <div class="container">
      <div class="card-header">
        <h5>Liste des catégories</h5>
      </div>
      <hr />

      <form>
        <h6>Nouvelle catégorie</h6>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Inscrivez vous</span>
          </div>
          <input
            type="text"
            class="form-control w-full appearance-none rounded border-2 border-red-600 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
            v-model="nom"
            required
          />

          <BouttonView class="btn btn-light" type="button" @click="createArtiste()" title="Création"> Ajouter </BouttonView>
        </div>
      </form>

      <div class="card-body table-responsive">
        <table class="text-light table">
          <thead>
            <tr>
              <th scope="col">
                <div class="float-left">Liste des catégories actuelles</div>
                <span class="float-right">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Chercher votre artiste</span>
                    </div>
                    <input
                      type="text"
                      class="form-control w-full appearance-none rounded border-2 border-red-600 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
                      v-model="filter"
                    />
                    <BouttonView class="btn btn-light" type="button" @click="createArtiste()" title="Création"> Ajouter </BouttonView>
                  </div>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="artiste in filterByNom" :key="artiste.id">
              <td>
                <form>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Les présents</span>
                    </div>

                    <img
                          class="center h-48 w-72 rounded-t-lg object-cover"
                          :src="artiste.participant"
                          alt="imgalt"
                        />

                    <input
                      type="text"
                      class="form-control w-full appearance-none rounded border-2 border-green-500 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:outline-none"
                      v-model="artiste.nom"
                      required
                    />

                    <BouttonView2 class="btn btn-light" type="submit" @click.prevent="updateArtiste(artiste)" title="Modification">
                      Modifier
                    </BouttonView2>

                    <BouttonView2 class="btn btn-light" type="submit" @click.prevent="deleteArtiste(artiste)" title="Suppression">
                      Delete</BouttonView2
                    >
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import BouttonView from "../components/BouttonView.vue";
import BouttonView2 from "../components/BouttonView2.vue";

export default {
  name: "ListeView",
  data() {
    return {
      nom: null,
      listeArtisteSynchro: [],
      filter: "",
    };
    
  },
  computed: {
    //Tri des catégories par ordre alpha
    orderByNom: function () {
      return this.listeArtisteSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },

    filterByNom: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByNom.filter(function (artiste) {
          return artiste.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByNom;
      }
    },
  },
  mounted() {
    this.getArtisteSynchro();
  },
  methods: {
    async getArtisteSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtiste = collection(firestore, "artiste");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtisteSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
       
       this.listeArtisteSynchro.forEach(function (artiste) {
          const storage = getStorage();
          const spaceRef = ref(storage, "participant/" + artiste.participant);
          getDownloadURL(spaceRef)
            .then((url) => {
              artiste.participant = url;
              console.log("artiste", artiste);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        
      });
    },
    async createArtiste() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const docRef = await addDoc(dbArtiste, {
        nom: this.nom,
        participant: this.participant,
      });
      console.log("document crée avec le id : ", docRef.id);
    },
    async updateArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await updateDoc(docRef, {
        nom: artiste.nom,
        participant: artiste.participant,
      });
    },
    async deleteArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await deleteDoc(docRef);
    },
  },
  components: { HeaderView, FooterView, BouttonView, BouttonView2 },
};
</script>
