<template>
  <VContainer>
    <VRow>
      <VCol>
        <p>this is search trips result page</p>
        <VTextField label="検索ワード" v-model="q" color="accent"></VTextField>
        <VBtn @click="searchTrips()">検索</VBtn>
        <pre>{{trips}}</pre>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import axios from "axios"
import Trip from "@/models/trip.js"
export default {
  data() {
    return {
      trips: [],
      q: ""
    }
  },
  methods: {
    searchTrips() {
      axios.get(`https://torimo.herokuapp.com/api/v1/search_trips?${this.q}`).then( resp => {
        // console.log(resp.data.trips);
        this.trips = []
        resp.data.trips.forEach(trip => {
          this.trips.push(new Trip(trip))
        });
      } )
    }
  }
}
</script>

<style>

</style>