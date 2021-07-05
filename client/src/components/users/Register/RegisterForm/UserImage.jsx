import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import "./style.css";

export default class UserImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: require("../../../../img/defaultAvatar.png")
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    });
  }

  render() {
    return (
      <>        
        <div>
          <Form.Label htmlFor="profPic">
            <div
              className="border rounded-circle"
              id="userImg"
              style={{ backgroundImage: `url("${this.props.image}")` }}
            ></div>
            <Form.Label className="text-muted" htmlFor="profPic">
              Click to change
            </Form.Label>
          </Form.Label>

          <Form.Control type='file' id='profPic' onChange={this.props.handleChange}></Form.Control>
          {/* <input
            className="form-control"
            type="file"
            id="profPic"
            onChange={this.props.handleChange}
          /> */}
        </div>
      </>
    );
  }
}
