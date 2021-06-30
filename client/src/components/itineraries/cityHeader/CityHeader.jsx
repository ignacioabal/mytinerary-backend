import React from "react";
import Nav from '../../Nav/NavButton'
import "./CityHeader.css";
import background from '../../../img/city_background.jpg'

export default function CityHeader(props) {
  return (
    <React.Fragment>
      <div id="cityHeader" className="bg-dark" style={{ backgroundImage: `url(${background})` }}> </div>

      <div id="cityTitle" className="text-center">
        <h3 className="text-lead text-white">{props.cityName}</h3>
        <h5 className="text-white">{props.countryName}</h5>
      </div>
    </React.Fragment>
  )
}


