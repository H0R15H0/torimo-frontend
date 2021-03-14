<template>
  <div class="wrapper">
    <VExpansionPanels v-model="panel" multiple class="pa-3">
      <div class="top-area mt-2 v-block">
        <div class="text-area">
          <!-- <VIcon>mdi-car</VIcon> -->
          <h3>{{trip.title}}</h3>
        </div>
        <div class="money-area">
          <VIcon small>mdi-bitcoin</VIcon>
          {{formatYen(trip.budget)}}円
        </div>
        <div class="place-area">
          <VIcon small>mdi-pin</VIcon>
          {{trip.main_place}}
        </div>
      </div>
      <VExpansionPanel v-for="(courses,i) in trip.coursesGroupByDay" :key="i">
        <VExpansionPanelHeader class="day" color="primary">{{i + 1}}日目</VExpansionPanelHeader>
        <VExpansionPanelContent>
          <VContainer>
            <VRow>
              <VCol cols="12">
                <TripCoursesTimeline :courses="courses"></TripCoursesTimeline>
              </VCol>
            </VRow>
          </VContainer>
        </VExpansionPanelContent>
      </VExpansionPanel>
    </VExpansionPanels>
  </div>
</template>

<script>
import TripCoursesTimeline from "@/components/TripCoursesTimeline.vue"

export default {
  components: {
    TripCoursesTimeline,
  },
  props: {
    trip: {
      type: Object,
    }
  },
  data() {
    return {
      panel: [0]
    }
  },

  computed: {
    coursesGroupByDay() {
      return this.groupBy(this.courses, c => c.day_of_trip)
    },
    formatYen() {
      return function (_yen) {
        let yen = _yen;
        if (yen === 0) {
          return 0
        } else if (yen) {
          return yen.toLocaleString(undefined, { maximumFractionDigits: 20 });
        } else {
          return ""
        }
      }
    },
  },
  // methods: {
  //   groupBy(array, getKey) {
  //     return array.reduce((obj, cur, idx, src) => {
  //       const key = getKey(cur, idx, src);
  //       (obj[key] || (obj[key] = [])).push(cur);
  //       return obj;
  //     }, {})
  //   }
  // }
}
</script>

<style scoped lang="scss">
.top-area {
  margin: 0 auto .5rem 1rem;
}
.text-area {
  font-size: 18px;
  line-height: 28px;
  color: #715841;
  text-align: initial;
  margin-bottom: 0.5rem;
}
.money-area,
.place-area {
  font-size: 12px;
  line-height: 16px;
  color: #757575;
  text-align: initial;
  margin-bottom: 0.2rem;
}
.day {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #715841;
}
</style>