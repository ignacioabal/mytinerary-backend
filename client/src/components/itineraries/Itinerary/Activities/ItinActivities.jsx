import React, { useState, useContext } from "react";
import Carousel from "./ActivitiesCarousel";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

export default function Activities(props) {
  const [open, setOpen] = useState(false);
  let { itinId, acts } = props;

  return (
    <div className="w-100">
   
    <Collapse in={open} >
      <div id="example-collapse-text">
      <Carousel activities={acts}></Carousel>
      </div>
    </Collapse>
    <Button
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}  

    >
      See More
    </Button>
  </div>
  )
}

