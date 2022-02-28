<template>
  <div class="card card-body mt-4">
    <h3>Edit Report</h3>
    <form @submit.prevent="update">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Person Reporting</label>
          <input v-model="form.reporter" type="text" class="form-control" required readonly />
        </div>
        <div class="col-md-6">
          <label class="form-label">Email</label>
          <input v-model="form.reporteremail" type="email" class="form-control" required readonly />
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
      <button type="submit" class="btn btn-primary mt-3 bi bi-save float-end"> Update</button>
    </form>
  </div>
</template>

<script setup>
import { auth, getReport, updateReport } from '../../firebase'
import { reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

    const router    = useRouter()
    const route     = useRoute()
    const reportId  = computed(() => route.params.id)

    const form = reactive({ reporter: '', reporteremail: '', reporttype:'', date:'', description:'', airline:'', updatedAt: new Date() })
    onMounted(async () => {
      const info          = await getReport(reportId.value)
      form.reporter       = info.reporter
      form.reporteremail  = info.reporteremail
      form.reporttype     = info.reporttype
      form.date           = info.date
      form.description    = info.description
      form.airline        = info.airline
      console.log(info)
    })

    const update = async () => {
      await updateReport(reportId.value, { ...form })
      form.reporter       = ''
      form.reporteremail  = ''
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
