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

          <BouttonView class="btn btn-light" type="button" @click="createParticipant()" title="Création"> Ajouter </BouttonView>
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
                    <BouttonView class="btn btn-light" type="button" @click="createParticipant()" title="Création"> Ajouter </BouttonView>
                  </div>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="participant in filterByNom" :key="participant.id">
              <td>
                <form>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Les présents</span>
                    </div>

                    <img class="center h-48 w-72 rounded-t-lg object-cover" :src="participant.photo" alt="imgalt" />

                    <input
                      type="text"
                      class="form-control w-full appearance-none rounded border-2 border-green-500 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:outline-none"
                      v-model="participant.nom"
                      required
                    />

                    <BouttonView2 class="btn btn-light" type="submit" @click.prevent="updateParticipant(participant)" title="Modification">
                      Modifier
                    </BouttonView2>

                    <BouttonView2 class="btn btn-light" type="submit" @click.prevent="deleteParticipant(participant)" title="Suppression">
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

    <div class="flex justify-around">
      <RouterLink class="block rounded-xl border-2 bg-warm py-2 px-4 text-white hover:text-red-600" to="/test">list</RouterLink>
      <RouterLink class="block rounded-xl border-2 bg-warm py-2 px-4 text-white hover:text-yellow-500" to="/test2">lis +image</RouterLink>
      <RouterLink class="block rounded-xl border-2 bg-warm py-2 px-4 text-white hover:text-green-400" to="/Ajout">Ajout</RouterLink>
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
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import BouttonView from "../components/BouttonView.vue";
import BouttonView2 from "../components/BouttonView2.vue";

export default {
  name: "ListeView",
  data() {
    return {
      nom: null,
      listeParticipantSynchro: [],
      filter: "",
      photo: null,
    };
  },
  computed: {
    //Tri des catégories par ordre alpha
    orderByNom: function () {
      return this.listeParticipantSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },

    filterByNom: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByNom.filter(function (participant) {
          //console.log("participant", participant.participant);
          return participant.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByNom;
      }
    },
  },
  mounted() {
    this.getParticipantSynchro();
  },
  methods: {
    async getParticipantSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbParticipant = collection(firestore, "participant");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbParticipant, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeParticipantSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        this.listeParticipantSynchro.forEach(function (participant) {
          const storage = getStorage();
          const spaceRef = ref(storage, "participant/" + participant.photo);
          //const spaceRef = ref(storage, "participant/buju.png");
          getDownloadURL(spaceRef)
            .then((url) => {
              participant.photo = url;
              // console.log("participant", participant);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.participant.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createParticipant() {
      const firestore = getFirestore();
      const storage = getStorage();
      const refStorage = ref(storage, "participant/" + this.participant.photo);
      const dbParticipant = collection(firestore, "participant");
      const docRef = await addDoc(dbParticipant, {
        nom: this.nom,
        participant: this.participant,
      });
      console.log("document crée avec le id : ", docRef.id);
    },
    async updateParticipant(participant) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "participant", participant.id);
      await updateDoc(docRef, {
        nom: participant.nom,
        participant: participant.participant,
      });
    },
    async deleteParticipant(participant) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "participant", participant.id);
      await deleteDoc(docRef);
    },
  },
  components: { HeaderView, FooterView, BouttonView, BouttonView2 },
};
</script>
