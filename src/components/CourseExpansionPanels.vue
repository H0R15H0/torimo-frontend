<template>
  <VExpansionPanels v-model="panel" multiple class="pa-3">
    <VExpansionPanel v-for="(courses,i) in trip.coursesGroupByDay" :key="i">
      <VExpansionPanelHeader color="primary">{{i}}日目</VExpansionPanelHeader>
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
  // computed: {
  //   coursesGroupByDay() {
  //     return this.groupBy(this.courses, c => c.day_of_trip)
  //   }
  // },
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

<style>

</style>