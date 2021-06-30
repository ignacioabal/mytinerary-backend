import { connect } from 'react-redux'
import React, { Component } from 'react'
import Itinerary from './Itinerary'
import CityHeader from './cityHeader/CityHeader'
import fetchItineraries from '../../redux/actions/itineraryActions'

class AvItineraries extends Component {
  constructor(props) {
    super(props)
    let { country, city } = this.props.match.params
    this.state = {
      cityName:city,
      countryName:country,
      }
  }

  componentDidMount() {
    this.props.fetchItineraries(this.state.countryName,this.state.cityName)

  }


  renderItineraries(elem) {   
    if(!this.props.loading){     
      return elem.map((itin) => {
        return <Itinerary itinerary={itin} key={itin._id} />
      })
    }else{
      return( <div className="spinner-border mt-5"></div>)
    }
  }

  render() {
    let {cityName,countryName}=this.state;
    return (
      <React.Fragment>
        <CityHeader cityName={cityName} countryName={countryName}/>
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
