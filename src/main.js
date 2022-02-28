import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

/* Code from Firebase API */
const firebaseConfig = {
      apiKey: "AIzaSyCDGqsCQWzQ0IdIs2KeXqAMCkHm6y5wYVk",
      authDomain: "flightsadmin.firebaseapp.com",
      databaseURL: "https://flightsadmin-default-rtdb.firebaseio.com",
      projectId: "flightsadmin",
      storageBucket: "flightsadmin.appspot.com",
      messagingSenderId: "778056821330",
      appId: "1:778056821330:web:52db69f197326888138d8b"
  }

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const app = createApp(App).use(router).mount('#app')