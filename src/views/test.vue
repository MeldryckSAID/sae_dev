<template>

 <header>
    <HeaderView />
  </header>
  
  <div class="container  dark:text-black">
    <div class="card-header m-3">
      <h2 class="font-archivo-black ml-1 mb-6 mt-10 w-80 -rotate-6 bg-black text-xl text-white">Liste des artistes</h2>
    </div>
    <hr />

    <form>
      <h3 class="dark:bg-grey m-3 font-bold dark:text-white">Nouvel artiste</h3>
      <div class="input-group m-3">
        <div class="input-group-prepend">
          <span class="input-group-text"></span>
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button class="btn btn-light" type="button" @click="createArtiste()" title="Création">Ajouter</button>
      </div>
    </form>

    <div class="card-body table-responsive">
      <table class="text-light table">
        <thead>
          <tr>
            <th scope="col">
              <div class="float-left ml-3 mt-3">Liste des artistes actuels</div>
              <span>
                <div class="input-group">
                  <div class="input-group-prepend m-3">
                    <span class="input-group-text">Filtrage</span>
                  </div>
                  <input type="text" class="form-control" v-model="filter" />
                  <button class="btn btn-light" type="button" title="Filtrage">Recherche</button>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artiste in filterByNom" :key="artiste.id">
            <td>
              <form>
                <div class="input-group m-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                  <img :src="artiste.image" alt="Photo de l'artiste" class="h-48 w-1/2 rounded-t-lg object-cover" />
                  <input
                    type="text"
                    class="form-control font-homenaje w-1/2 rounded-b-lg bg-red-100 text-3xl uppercase text-white"
                    v-model="artiste.nom"
                    required
                  />

                  <button class="btn btn-light" type="submit" @click.prevent="updateArtiste(artiste)" title="Modification">
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button class="btn btn-light" type="submit" @click.prevent="deleteArtiste(artiste)" title="Suppression">delete</button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "ListeView",
  data() {
    return {
      nom: null, // Pour la création d'une catégorie
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
        this.listeArtisteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        this.listeArtisteSynchro.forEach(function (artiste) {
          const storage = getStorage();
          const spaceRef = ref(storage, "image/" + artiste.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              artiste.image = url;
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
        image: this.image,
      });
      console.log("document crée avec le id : ", docRef.id);
    },

    async updateArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await updateDoc(docRef, {
        nom: artiste.nom,
        image: artiste.image,
      });
    },

    async deleteArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped></style>
