<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mt-4">
          <div class="card-body text-center">
          <h3> Login to Your Account </h3>
          <span class="small text-muted">Login to Proceed</span>
          <form @Submit.prevent="signIn">
            <div class="form-floating mb-3">
              <input type='text' class="form-control mb-2" placeholder="Email" v-model='email'/>
              <label for="floatingInput">Email Address</label>
            </div>
            <div class="form-floating mb-3">
              <input type='password' class="form-control mb-2" placeholder="Password" v-model='password'/>
              <label for="floatingInput">Enter your Password</label>
            </div>
            <p class="text-danger" v-if="errMsg"> {{ errMsg }} </p>
            <button type="submit" class="btn btn-primary btn-sm mb-3 bi bi-box-arrow-in-right"> Login </button>
            <p class="text-center"> Don't have account? <router-link to="/register"> Register </router-link></p>

            <button @click="googleLogin" class="btn btn-primary btn-sm mb-3 bi bi-google"> Login with Google </button>
          </form>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth, provider } from '../../firebase'
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')
const errMsg = ref() // ERROR MESSAGE

const router = useRouter()

const signIn = () => {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      console.log('Successfully logged in!');
      router.push('/') // redirect to the feed
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
            errMsg.value = 'Invalid email address'
            break
        case 'auth/user-not-found':
            errMsg.value = 'Account with that email was not found'
            break
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password'
            break  
        case 'auth/weak-password':
            errMsg.value = 'The Password you provided is short'
            break  
        default:
            errMsg.value = 'Email or password was incorrect'
            break
      }
    });
}
function googleLogin() {
  auth.signInWithPopup(provider)
  .then(() => {
      console.log('Successfully logged in!');
      router.push('/') // redirect to the feed
  })
  .catch(error => {
      console.log(error.code)
      alert(error.message);
    });
}
</script>