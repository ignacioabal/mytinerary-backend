import React, { Component } from 'react'
import './itinerary.css'

export default class Itinerary extends Component {

  render() {
    var { _id, user, name, likes, duration, tags, price } = this.props.itinerary
    return (
      <article id="itinerary" className="row border" key={_id}>
        <div id="user" className="col">
          <img
            src={require('../../img/defaultAvatar.png')}
            alt="User Pic."
            id="UserPic"
          />
          <p>{user}</p>
        </div>
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
      </article>
    )
  }
}


// export default connect(mapStateProps, mapDispatchToProps)(Itinerary);
