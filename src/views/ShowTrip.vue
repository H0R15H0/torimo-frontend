<template>
  <div>
    <CourseExpansionPanels :trip="trip"></CourseExpansionPanels>
  </div>
</template>

<script>
import Trip from "@/models/trip.js"
import CourseExpansionPanels from "@/components/CourseExpansionPanels.vue"

export default {
  components: {
    CourseExpansionPanels,
  },
  data() {
    return {
      trip: new Trip(Number(this.$route.params.id)),
      // trips: [{
      //   id: null,
      //   title: null,
      //   main_place: null,
      //   budget: null,
      //   trip_courses: [{
      //   id: null,
      //   trip_id: null,
      //   palce: null,
      //   arrival_time: null,
      //   day_of_trip: null,
      //   index_in_course: null,
      //   transportation_to_next: [{
      //     id: null,
      //     name: null,
      //   }]
      // }]}]
    }
  },
  created() {
    console.log(this.$route.params.id)
  }
}
</script>

<style>

</style>