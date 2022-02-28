import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { ref, onUnmounted } from 'vue'

export const db = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

const flightsCollection = firebase.firestore().collection('flights')
const reportsCollection = firebase.firestore().collection('reports')

//Create
export const createFlight = flight => {
  return flightsCollection.add(flight)
}
export const createReport = report => {
  return reportsCollection.add(report)
}

//Get
export const getFlight = async id => {
  const flight = await flightsCollection.doc(id).get()
  return flight.exists ? flight.data() : null
}
export const getReport = async id => {
  const report = await reportsCollection.doc(id).get()
  return report.exists ? report.data() : null
}

//Update
export const updateFlight = (id, flight) => {
  return flightsCollection.doc(id).update(flight)
}
export const updateReport = (id, report) => {
  return reportsCollection.doc(id).update(report)
}

//Delete
export const deleteFlight = id => {
  return flightsCollection.doc(id).delete()
}
export const deleteReport = id => {
  return reportsCollection.doc(id).delete()
}

//List
export const useLoadFlights = () => {
  const flights = ref([])
  const close = flightsCollection.orderBy('date', 'desc').orderBy('origin').onSnapshot(snapshot => {
    flights.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return flights
}
export const useLoadReports = () => {
  const reports = ref([])
  const close = reportsCollection.orderBy('date', 'desc').limit(5).onSnapshot(snapshot => {
    reports.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return reports
}