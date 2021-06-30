import React, { Component } from 'react'
import User from './itinUser'
import Details from './ItinDetails'
import Activities from './Activities/ItinActivities'
import './itinerary.css'

export default class Itinerary extends Component {

  render() {
    let { itinerary } = this.props
    var { _id, user, activities } = itinerary
    return (
      <article id="itinerary" className="row border" key={_id}>
        <div className="row">
          <User name={user}></User>
          <Details itinerary={itinerary}></Details>
        </div>
        <div className="row w-100">
          <Activities acts={activities}></Activities>
        </div>
      </article>

    )
  }
}