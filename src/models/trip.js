import axios from 'axios'

export default class Trip {
  constructor(arg) {
    this.init()
    if ( typeof arg == "number" ) { this.fetch(arg) }
    if ( typeof arg == "object" ) { Object.assign(this, arg) }
  }

  fetch(id){
    axios.get(`http://localhost:3000/api/v1/trips/${id}`).then( resp => {
      console.log(resp.data.trip);
      Object.assign(this, resp.data.trip);
    } )
  }

  init(){
    this.id = null
    this.title = null
    this.main_place = null
    this.budget = null
    this.trip_course = null
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