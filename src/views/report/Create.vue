<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Person Reporting</label>
          <input v-model="form.reporter" type="text" class="form-control" readonly required />
        </div>
        <div class="col-md-6">
          <label class="form-label">Email</label>
          <input v-model="form.reporteremail" type="text" class="form-control" readonly required />
        </div>     
        <div class="col-md-6">
          <label class="form-label">Select Report Type</label>
          <select v-model="form.reporttype" class="form-select" name="reporttype">
            <option value="GE">General Incident</option>
            <option value="NM">Near Miss</option>
            <option value="SO">Safe Observation</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Date of Occurance</label>
          <input v-model="form.date" type="date" class="form-control" required />
        </div>
        <div class="col-md-12">
          <label class="form-label">Description</label>
          <textarea v-model="form.description" class="form-control" rows="6" name="description"></textarea>
        </div> 
        <div class="form-check form-check-inline form-switch">
          <input v-model="form.airline" class="form-check-input" type="checkbox">
          <label class="form-check-label">Airline Involved?</label>
        </div>   
      </div>
      <button type="submit" class="btn btn-primary bi bi-plus-lg mt-3 float-end"> Create Report</button>
    </form>
  </div>
</template>

<script setup>
import { auth, createReport } from '../../firebase'
import { reactive, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

    const router = useRouter()
    const user = auth.currentUser
    const name = user.displayName
    const email = user.email
    const form = reactive({ reporter: name, reporteremail: email, reporttype:'', files:'', date:'', description:'', airline:'', reportID: Math.random().toString(2).substr(2, 6), createdAt: new Date()})

    const onSubmit = async () => {
      await createReport({ ...form })
      form.reporter       = ''
      form.reporteremail  = ''
      form.files  = ''
      form.reporttype     = ''
      form.date           = ''
      form.description    = ''
      form.airline        = ''
      router.push('/report')
    }

    const authListener = auth.onAuthStateChanged(function(user) {
            if (!user) { // Not logged in
            router.push('/login')
        }
    });

    onBeforeUnmount(() => {
        // Clear up Listener
        authListener()
    })
  
</script>