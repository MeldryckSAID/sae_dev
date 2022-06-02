import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVS1WEqK5tlQ2h7TDdjdTYxYIIaqjyNr0",
    authDomain: "sae-dev-4268c.firebaseapp.com",
    projectId: "sae-dev-4268c",
    storageBucket: "sae-dev-4268c.appspot.com",
    messagingSenderId: "7568187675",
    appId: "1:7568187675:web:7f694262110326f75d33be"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);