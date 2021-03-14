<template>
    <div class="CreateTrip mb-16">
        <div class="main-title accent--text">
          <h1>投稿フォーム</h1>
        </div>
        <div class="input-header">
            <VTextField
            label="旅のタイトル"
            :rules="rules"
            hide-details="auto"
            ></VTextField>

            <v-autocomplete
            ref="country"
            v-model="country"
            :rules="[() => !!country || '旅行先を選択してください']"
            :items="countries"
            label=""
            placeholder="旅行先"
            required
            ></v-autocomplete>
            
            <v-slider
            class="cost-slider"
            v-model="value"
            :thumb-size="52"
            step="2000"
            min="0"
            max="50000"
            label="費用(円)"
            thumb-label="always"
            ticks
            ></v-slider>
        </div>
        <VContainer>
    <VRow>
      <!-- <VCol cols="12"><VTextField label="旅のタイトル" v-model="params.trip.title"></VTextField></VCol>
      <VCol cols="12"><VTextField label="旅行先" v-model="params.trip.main_place"></VTextField></VCol>
      <VCol cols="12"><VTextField label="予算" v-model="params.trip.budget"></VTextField></VCol> -->
      <VCol cols="12"><VTextField label="場所" v-model="params.trip.palce"></VTextField></VCol>
      <VCol cols="12"><VTextField label="到着時刻" v-model="params.trip.trip_courses[0].arrival_time"></VTextField></VCol>
      <VCol cols="12"><VTextField label="何日目か" v-model="params.trip.trip_courses[0].day_of_trip"></VTextField></VCol>
      <VCol cols="12"><VTextField label="何箇所目か？" v-model="params.trip.trip_courses[0].index_in_course"></VTextField></VCol>      
      <VCol cols="12"><VTextField label="交通手段ID" v-model="params.trip.trip_courses[0].transportation_to_next_id"></VTextField></VCol>      
    </VRow>
    <VBtn @click="submit" color="accent" class="mt-5">submit</VBtn>
  </VContainer>
        
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      countries: ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府', '大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'],
      errorMessages: '',
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      formHasErrors: false,
      params: {
        trip: {
          title: null,
          main_place: null,
          budget: null,
          trip_courses: [
            {
              palce: null,
              arrival_time: null,
              day_of_trip: null,
              index_in_course: null,
              transportation_to_next_id: null
            }
          ]
        }
      }
    }
  },
  methods: {
    submit() {
      // axios.post(`https://torimo.herokuapp.com/api/v1/trips`, {params: this.params}).then( resp => {
      axios.post(`http://localhost:3000/api/v1/trips/`, {params: this.params}).then( resp => {
        // console.log(resp.data.trips);
        console.log(resp)
      } )
    }
  }
}
</script>

<style>
.main-title h1 {
    text-align: left;
    font-size: 30px;
    margin: 40px 0 25px 20px;
}
.input-header {
    width: 90%;
    margin: auto;
}
.cost-slider {
    margin-top: 60px;
}
</style>