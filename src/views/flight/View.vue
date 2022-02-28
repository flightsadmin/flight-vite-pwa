<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card mt-2">
        <div class="card-header d-flex align-items-center justify-content-between">
          <h4 class="bi bi-deck-fill"> Flights</h4> 
          <router-link to="/add/flights">
            <button class="btn btn-success btn-sm me-2 bi bi-plus-lg"> Add Flight</button>
          </router-link>
        </div>
        <div class="card-body">
          <div class="col-md-12">
            <div class="table-responsive table-wrapper">
              <table class="table table-sm table-bordered table-flights">
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>STA</th>
                    <th>STD</th>
                    <th>Registration</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th width="90">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="{ id, flight, date, sta, std, registration, origin, destination } in flights" :key="id">
                    <td>{{ flight }}/{{ new Date(date).getDate() }}</td>
                    <td>{{ sta }}</td>
                    <td>{{ std }}</td>
                    <td>{{ registration }}</td>
                    <td>{{ origin }}</td>
                    <td>{{ destination }}</td>
                    <td>
                      <router-link :to="`/edit/flight/${id}`">
                        <button class="btn btn-primary btn-sm me-2 bi bi-pencil-fill"></button>
                      </router-link>
                      <button class="btn btn-danger btn-sm bi bi-trash-fill" @click="deleteFlight(id)">
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { auth, useLoadFlights, deleteFlight } from '../../firebase'
import { onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

  const flights = useLoadFlights()

  const router = useRouter()
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