import axios from 'axios'

export default class Trip {
  constructor(arg) {
    this.init()
    if ( typeof arg == "number" ) { this.fetch(arg) }
    if ( typeof arg == "object" ) { Object.assign(this, arg) }
  }

  fetch(id){
    axios.get(`https://torimo.herokuapp.com/api/v1/trips/${id}`).then( resp => {
      console.log(resp.data.trip);
      Object.assign(this, resp.data.trip);
    } )
  }

  init(){
    this.id = null
    this.title = null
    this.main_place = null
    this.budget = null
    this.trip_courses = null
  }

  get coursesGroupByDay() {
    // let tripCourses = []
    let groupedCourses = Object.values(this.groupBy(this.trip_courses, c => c.day_of_trip))
    console.log(groupedCourses)
    let tripCourses = groupedCourses.map((dayCourses) => {
      let courses = []
      dayCourses.forEach((course) => {
        if (course.transportation_to_next) {
          courses.push(course)
          courses.push({name: course.transportation_to_next.name})
        }
        else {
          courses.push(course)
        }
      })
      return courses
      // tripCourses.push(courses)
    })
    console.log(tripCourses)
    return tripCourses//this.groupBy(this.trip_courses, c => c.day_of_trip)
  }

  groupBy(array, getKey) {
    if (!array) {return}
    return array.reduce((obj, cur, idx, src) => {
      const key = getKey(cur, idx, src);
      (obj[key] || (obj[key] = [])).push(cur);
      return obj;
    }, {})
  }

  // toPostedObject(){
  //   var postedObject = {}
  //   postedObject.name = this.name
  //   postedObject.uuid = this.uuid
  //   postedObject.is_closed = this.is_closed
  //   return postedObject
  // }

  // create(){
  //   return axios.post( '/api/v1/events', { event: this.toPostedObject() } )
  // }

  // update(){

  // }

  // save(){
  //   return
  // }
}