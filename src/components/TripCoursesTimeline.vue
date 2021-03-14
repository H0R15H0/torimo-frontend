<template>
  <VTimeline>
    <!-- {{courses}} -->
    <div v-for="(course, i) in courses" :key="i">
      <!-- {{course}} -->
      <VTimelineItem small v-if="!course.name">
        <div v-if="i % 2 == 0">
          <div>{{course.place}}</div>
          <!-- <VIcon class="">mdi-car</VIcon> -->
        </div>
        <div v-else>
          {{course.arrival_time}}
        </div>
        <template v-slot:opposite>
          <div style="text-align:center;" v-if="i % 2 == 0">{{course.arrival_time}}</div>
          <div style="text-align:center;" v-else>
            <div>{{course.place}}</div>
            <!-- <VIcon class="">mdi-car</VIcon> -->
          </div>
        </template>
      </VTimelineItem>
      <VTimelineItem v-else hide-dot>
        <VIcon v-if="course.name == '車'">mdi-car</VIcon>
        <VIcon v-else-if="course.name == '徒歩'">mdi-walk</VIcon>
        <VIcon v-else-if="course.name == 'フェリー'">mdi-ferry</VIcon>
        <VIcon v-else-if="course.name == '自転車'">mdi-bicycle</VIcon>
        <VIcon v-else-if="course.name == 'バス'">mdi-bus-side</VIcon>
        <VIcon v-else-if="course.name == '飛行機'">mdi-airplane</VIcon>
      </VTimelineItem>
    </div>
    <!-- <VTimelineItem v-for="(course, i) in courses" :key="i" small>
      <div v-if="i % 2 == 0">
        <div>{{course.place}}</div>
        <VIcon class="">mdi-car</VIcon>
      </div>
      <div v-else>
        {{course.arrival_time}}
      </div>
       <template v-slot:opposite>
        <div style="text-align:center;" v-if="i % 2 == 0">{{course.arrival_time}}</div>
        <div style="text-align:center;" v-else>
          <div>{{course.place}}</div>
          <VIcon class="">mdi-car</VIcon>
        </div>
      </template>
    </VTimelineItem> -->
  </VTimeline>
</template>

<script>
export default {  
  props: {
    courses: {
      type: Array,
    }
  }
}
</script>

<style>

</style>