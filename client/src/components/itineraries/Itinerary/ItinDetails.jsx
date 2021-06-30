import React from 'react'

export default function ItinDetails(props) {
    let {name, likes, duration, tags, price} = props.itinerary;
    return (
        <div id="details" className="col">
          <h3 id="title">{name}</h3>
          <div id="info">
            <ul className="nav">
              <li className="nav-item">Likes: {likes}</li>
              <li className="nav-item">{duration} Hours</li>
              <li className="nav-item">${price}</li>
            </ul>
          </div>
          <div id="tags">
            <ul className="nav">
              {tags.map(tag =>{
                  return <li className="nav-item" key={tag}>#{tag}</li>
              })}
            </ul>
          </div>
        </div>
    )
}
