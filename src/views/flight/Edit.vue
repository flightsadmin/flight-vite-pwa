<template>
  <div class="card card-body mt-4">
    <h3>Edit Flight</h3>
    <form @submit.prevent="update">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Flight No</label>
          <input v-model="form.flight" type="text" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label class="form-label">Date</label>
          <input v-model="form.date" type="date" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label class="form-label">STA</label>
          <input v-model="form.sta" type="time" class="form-control" />
        </div>
        <div class="col-md-6">
          <label class="form-label">STD</label>
          <input v-model="form.std" type="time" class="form-control" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Registration</label>
          <input class="form-control" v-model="form.registration" list="registrations" placeholder="Search Registrations">
          <datalist id="registrations">
            <option value="XA-AAA">XA-AAA</option>
            <option value="XA-AAB">XA-AAB</option>
            <option value="XA-AAC">XA-AAC</option>
            <option value="XA-AAD">XA-AAD</option>
            <option value="XA-AAE">XA-AAE</option>
          </datalist>
        </div>
        <div class="col-md-6">
          <label class="form-label">Origin</label>
          <input class="form-control" v-model="form.origin" list="stations" placeholder="Search Stations">
          <datalist id="stations">
            <option value="MCT">Muscat</option>
            <option value="NBO">Nairobi</option>
            <option value="DXB">Dubai</option>
            <option value="KWI">Kuwait</option>
            <option value="JED">Jeddah</option>
          </datalist>
        </div>
        <div class="col-md-6">
          <label class="form-label">Destination</label>
          <input class="form-control" v-model="form.destination" list="stations" placeholder="Search Stations">
        </div>        
      </div>
      <button type="submit" class="btn btn-primary mt-3 bi bi-save float-end"> Update</button>
    </form>
  </div>
</template>

<script setup>
import { auth, getFlight, updateFlight } from '../../firebase'
import { reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

    const router    = useRouter()
    const route     = useRoute()
    const flightId  = computed(() => route.params.id)

    const form = reactive({ flight: '', date: '', sta:'', std:'', registration:'', origin:'', destination:'', updatedAt: new Date() })
    onMounted(async () => {
      const info        = await getFlight(flightId.value)
      form.flight       = info.flight
      form.date         = info.date
      form.sta          = info.sta
      form.std          = info.std
      form.registration = info.registration
      form.origin       = info.origin
      form.destination  = info.destination
      console.log(info)
    })

    const update = async () => {
      await updateFlight(flightId.value, { ...form })
      form.flight       = ''
      form.date         = ''
      form.sta          = ''
      form.std          = ''
      form.registration = ''
      form.origin       = ''
      form.destination  = ''
      router.push('/')
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
