<template>
  <div class="home">
    <div class="top-area">
      <img class="top-img" src="../assets/zekkei_mv.jpg">
    </div>

    <div class="mx-4">
      <v-form >
        <v-container class="search-bar">
          <v-row no-gutters align="center">
            <v-col cols="9">
              <v-text-field
                label="検索"
                clearable
                class=""
                v-model="q"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-btn
                color="accent"
                class="mb-2"
                @click="searchTrips()"
              >検索</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <div>
        <div v-show="trips == false">すみません！見つかりませんでした！</div>
        <!-- ここでforまわしてください！ -->
        <div
          v-ripple
          class="my-5"
          v-for="trip in trips"
          v-bind:key="trip.id"
          v-show="trips"
          @click="moveToShowTrip(trip.id)"
        >
          <v-card style="text-align: left">
            <div class="trip-card-content">
              <v-container class="pa-4">
                <v-row>
                  <v-col cols="8" class="py-0">
                    <vcard-title
                      class="subtitle-1 font-weight-bold accent--text"
                    >
                      <!-- 京都散策お手軽コース -->
                      {{ trip.title }}
                    </vcard-title>
                    <p class="ma-0">
                      <!-- 京都 -->
                      {{ trip.main_place }}
                    </p>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col cols="3" class="py-0">
                    <p>{{ trip.budget }}円</p>
                    <p>{{ trip.transportations[0].name }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-card>
        </div>
      </div>


    </div>

    <div class="btn-create">
      <v-btn class="mx-2" fab dark color="#715841" to="/trips/new">
        <v-icon dark>
            mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import Trip from "@/models/trip.js"
export default {
  data() {
    return {
      defaultTrips: [],
      trips: [],
      q: ""
    }
  },
  methods: {
    searchTrips() {
      axios.get(`https://torimo.herokuapp.com/api/v1/search_trips?q=${this.q}`).then(resp => {
        this.trips = []
        resp.data.trips.forEach(trip => {
          this.trips.push(new Trip(trip));
        });
      })
    },
    moveToShowTrip(id) {
      this.$router.push({
        name: 'ShowTrip',
        params: {
          id: id
        }
      }, () => {})
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  created() {
    axios.get(`https://torimo.herokuapp.com/api/v1/trips`)
      .then(resp => {
        resp.data.trips.forEach(trip => {
          this.trips.push(new Trip(trip));
          this.defaultTrips = this.trips;
        });
    });
  },
  watch: {
    q: {
      immediate: false,
      handler: function() {
        if (!this.q) this.trips = this.defaultTrips;
      }
    }
  }
}
</script>

<style>
.top-area img {
  width: 100%;
  height: auto;
}
.btn-create {
  width: 70px;
  height: 60px;
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.trip-card-content p {
  margin: 0px;
  color: #777;
  font-size: 0.7rem;
}
</style>