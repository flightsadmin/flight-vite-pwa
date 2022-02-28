<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card mt-2">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="bi bi-deck-fill"> Reports</h4> 
          <router-link to="/add/reports">
            <button class="btn btn-success btn-sm me-2 bi bi-plus-lg"> Add Report</button>
          </router-link>
        </div>
        <div class="card-body">
          <div class="col-md-12">
            <div class="row">
              <div class="card mb-2" v-for="{ id, reporter, reporttype, reporteremail, date, description, airline, reportID, createdAt } in reports" :key="id">
                <div class="card-body d-flex">
                  <div class="">
                    <p class="">{{ reporttype+reportID }} <span class="text-muted small"> - {{ reporter }}</span> </p>
                    <div class="me-5">{{ description }}</div>
                  </div>
                  <div class="ms-auto">
                    <router-link :to="`/edit/report/${id}`">
                          <button class="btn btn-primary btn-sm me-2 bi bi-pencil-fill"></button>
                        </router-link>
                        <button class="btn btn-danger btn-sm bi bi-trash-fill" @click="deleteReport(id)">
                        </button>
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { auth, useLoadReports, deleteReport } from '../../firebase'
import { onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'

  const reports = useLoadReports()

  const router = useRouter()
  const no = 1
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