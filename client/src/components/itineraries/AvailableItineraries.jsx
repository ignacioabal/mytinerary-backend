import { connect } from 'react-redux'
import React, { Component } from 'react'
import Itinerary from './Itinerary'
import fetchItineraries from '../../redux/actions/itineraryActions'

class AvItineraries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading:this.props.loading
    }
  }

  componentDidMount() {
    let { country, city } = this.props.match.params
    this.props.fetchItineraries(country, city)

  }


  renderItineraries(elem) {   
    if(!this.props.loading){     
      return elem.map((itin) => {
        return <Itinerary itinerary={itin} />
      })
    }else{
      return <h1> loading </h1>
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderItineraries(this.props.itineraries)}
      </React.Fragment>
    )
  }
}

const mapStateProps = (state) => {
  return {
    itineraries: state.itineraryReducer.itineraries,
    loading: state.itineraryReducer.loading  
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItineraries: (country, city) => dispatch(fetchItineraries(country, city)),
  }
}
export default connect(mapStateProps, mapDispatchToProps)(AvItineraries)
