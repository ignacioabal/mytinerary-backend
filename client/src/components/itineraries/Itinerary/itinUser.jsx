import React from 'react'


export default function itinUser(props) {
    let {name} = props;
    return (
        <div id="user" className="col">
          <img
            src={require('../../../img/defaultAvatar.png')}
            alt="User Pic."
            id="UserPic"
          />
          <p>{name}</p>
        </div>
    )
}
