import React, { Component } from "react";
import Carousel from "./ActivitiesCarousel";

export default class Activities extends Component {
  render() {
    let {compId, acts} =this.props; 
    return (
      <div id="itinActivities">
        <div className="collapse" id={compId}>
          <Carousel acts={acts}></Carousel>
        </div>
        <div id="btnDet">
          <h4>
            <a
              href={"#" + compId}
              className="btn  btn-block bg-dark text-white"
              role="button"
              data-toggle="collapse"
            >
              See More
            </a>
          </h4>
        </div>
      </div>
    );
  }
}
