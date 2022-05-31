import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue';
import Mention from "../views/MentionView.vue";
import Artistes from "../views/ArtistesView.vue";
import Concert from "../views/ConcertView.vue";
import Festival from "../views/FestivalView.vue";
import Programation from "../views/ProgramationView.vue";
import Contact from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/Mention", name: "Mention", component: Mention },
    { path: "/Concert", name: "Concert", component: Concert },
    { path: "/Artistes", name: "Artistes", component: Artistes },
    { path: "/Festival", name: "Festival", component: Festival },
    { path: "/Programation", name: "Programation", component: Programation },
    { path: "/Contact", name: "Contact", component: Contact },
    // ici les autre routes
  ],
});

export default router
