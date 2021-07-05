import React, { Component, useState } from "react";
import Image from "./UserImage";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Convert } from 'mongo-image-converter'
import { Formik } from 'formik'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      profPic: require("../../../../img/defaultAvatar.png"),
      country: 'England',
      image: '',
      registrationStatus: ''
    }
  }

  handleChange = event => {

    let field = event.target.id;
    if (field == 'profPic') return this.setState({ profPic: URL.createObjectURL(event.target.files[0]), image: event.target.files[0] })
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = async (event) => {

    await this.convertImage(this.state.image);
    let {username, email, password, firstName, lastName, profPic, country} = this.state
    let userData = {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      profPic: profPic,
      country: country,
    }
    console.log(userData)
    axios.post("http://localhost:5000/register", userData);
  }

  convertImage = async (image) => {
    try {
      const imageString = await Convert(image)
      if (imageString) {
        this.setState({ profPic: imageString })
      }
      else {
        this.setState({ registrationStatus: 'imageNotJpgOrPng' })
      }
    }
    catch (error) {
      console.warn(error.message)
    }
  }

  convertUser = () => {
    let {username, email, password, firstName, lastName, profPic, country} = this.state
    let userData = {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      profPic: profPic,
      country: country,
    }

    return userData;
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h3>Create New Account</h3>
          <Image handleChange={this.handleChange.bind(this)} image={this.state.profPic}></Image>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={this.handleChange} id="username"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control type='email' onChange={this.handleChange} id="email"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' onChange={this.handleChange} id="password"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type='password'></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control onChange={this.handleChange} id="firstName"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control onChange={this.handleChange} id="lastName"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control as='select' onChange={this.handleChange} id="country">
              <option value="England">England</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Holland">Holland</option>
              <option value="Ireland">Ireland</option>
              <option value="Spain">Spain</option>
              <option value="United States">United States</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="I agree MYtinerary's terms and conditions." />
            <Form.Text className="text/muted"><a href="#">Terms & Conditions</a></Form.Text>
            <Button className="btnUserSubmit" onClick={this.handleSubmit} > Submit </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}
