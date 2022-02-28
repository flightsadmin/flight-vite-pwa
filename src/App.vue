<template>
 <Navbar />
  <div class="container-fluid">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
  import {onBeforeMount} from 'vue';
  import {useRouter, useRoute} from 'vue-router';
  import firebase from 'firebase/app'
  import 'firebase/auth'

  const router = useRouter();
  const route = useRoute()
  onBeforeMount(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // If not logged in redirect to login page
      if(!user){
        router.replace('/login')
      }
      // If logged in redirect to Home Page
      else if (route.path == '/login' || route.path == '/register'){
        router.replace('/')
      }
    })
  })
  // components: { Navbar}
</script>