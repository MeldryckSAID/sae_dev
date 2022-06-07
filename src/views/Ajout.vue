<template>
  <header>
    <HeaderView />
  </header>
  <main class="bg-cream">
    <h1 class="m-5 mt-0 text-center font-fredoka text-6xl"><span class="text-red/600"> Faya</span> Festival</h1>
    <h2 class="m-3 text-center font-fredoka text-3xl">Ajout</h2>

    <div class="container">
      <form enctype="multipart/form-data" @submit.prevent="createParticipant">
        <div class="flex flex-col">
          <div class="flex justify-center">
            <h5 class="font-fredoka text-xl">Création participant</h5>
          </div>

          <div class="">
            <div class="row">
              <div class="col-6">
                <div>
                  <img class="preview img-fluid" :src="imageData" />
                </div>
              </div>

              <div class="col-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="m-3 text-center font-fredoka text-xl">Nom</span>
                  </div>
                  <input
                    class="form-control w-full appearance-none rounded border-2 border-red-600 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
                    placeholder="Nom de la personne"
                    v-model="participant.nom"
                    required
                  />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="m-3 text-center font-fredoka text-xl">Prénom</span>
                  </div>
                  <input
                    v-model="participant.prenom"
                    class="w-full appearance-none rounded border-2 border-red-600 bg-gray-200 py-2 px-4 leading-tight text-black placeholder:text-black focus:border-green-500 focus:bg-white focus:outline-none"
                    placeholder="Prénom de la personne"
                    key="required"
                  />
                </div>
                <br />
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="m-3 text-center font-fredoka text-xl">Photo</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
                  </div>
                </div>
                <br />

                <br />
              </div>
            </div>
          </div>

          <div class="flex justify-around p-5">
            <button
              type="submit"
              class="inline-block gap-2 rounded-3xl bg-gris p-7 py-2.5 text-center font-inter font-bold text-white hover:bg-green-900"
            >
              Créer
            </button>

            <button
              class="inline-block gap-2 rounded-3xl bg-gris p-7 py-2.5 text-center font-inter font-bold text-white hover:bg-green-900"
            >
              <router-link to="/test2">Annuler</router-link>
            </button>
          </div>
          
        </div>
      </form> 
      </div>
      <div class="flex justify-around ">
   <RouterLink class="block border-2 rounded-xl bg-warm text-white  py-2 px-4 hover:text-red-600" to="/test">list</RouterLink>
   <RouterLink class="block border-2 rounded-xl bg-warm text-white py-2 px-4 hover:text-yellow-500" to="/test2">lis +image</RouterLink>
   <RouterLink class="block border-2 rounded-xl bg-warm  text-white py-2 px-4 hover:text-green-400" to="/Ajout">Ajout</RouterLink>

    </div>
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import BouttonView from "../components/BouttonView.vue";
import BouttonView2 from "../components/BouttonView2.vue";

import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: { HeaderView, FooterView, BouttonView, BouttonView2 },

  name: "CreateView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeParticipantSynchro: [], // Liste des participant pour la nationalité du participant
      participant: {
        // Le participant à créer
        nom: null, // son nom
        prenom: null, // son prénom
        photo: null, // sa photo (nom du fichier)
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participant
    this.getParticipant();
  },
  methods: {
    async getParticipant() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbParticipant = collection(firestore, "participant");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du participant par ordre croissant (asc)
      const q = query(dbParticipant, orderBy("nom", "asc"));
      // Récupération de la liste des participant à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeParticipantSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des participant", this.listeParticipantSynchro);
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
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "participant/" + this.participant.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création du participant sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "participant"), this.participant);
      });
      // redirection sur la liste des participants
      this.$router.push("/participant");
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
a:hover {
  text-decoration: none;
}
</style>
