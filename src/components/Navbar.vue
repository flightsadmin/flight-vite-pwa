<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand"> Home </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li id="alertM" class="nav-item"></li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/login" class="nav-link"> Login</router-link>            
          </li>
          <li v-else class="nav-item d-flex">
            <li class="nav-item">
              <router-link to="/" class="nav-link me-3"> Flights</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/report" class="nav-link me-3"> Reports</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item bi bi-unlock-fill" @click="signOut"> Logout</a></li>
                <li><a class="dropdown-item bi bi-person-fill" href="#"> Profile</a></li>
              </ul>
            </li>              
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(true)

// Runs after firebase is initialized
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
})

const signOut = () => {
  firebase.auth().signOut()
  router.push('/login')
}
</script>