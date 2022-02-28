<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mt-4">
          <div class="card-body text-center">
          <h3> Create an Account </h3>
          <span class="small">Create Account to Proceed</span>
          <form @Submit.prevent="register">
            <div class="form-floating mb-3">
              <input type='text' class="form-control mb-2" placeholder="Email" v-model='email'/>
              <label for="floatingInput">Email Address</label>
            </div>
            <div class="form-floating mb-3">
              <input type='password' class="form-control mb-2" placeholder="Password" v-model='password'/>
              <label for="floatingInput">Choose Password</label>
            </div>
            <button type="submit" class="btn btn-primary btn-sm mb-3"> Register </button>
            <p class="text-center"> Already have an account? <router-link to="/login"> Login </router-link></p>
          </form>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../../firebase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const router = useRouter()
const register = () => {
  auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      console.log('Successfully Registered!');
      sendEmail();
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message);
    });
}
const sendEmail = () => {
  auth.currentUser.sendEmailVerification()
  .then (()=>{
    router.push('/')
  })
}
</script>