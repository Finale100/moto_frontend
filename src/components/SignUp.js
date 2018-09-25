import React from 'react'
import { Button, Checkbox, Form, TextArea, Icon } from 'semantic-ui-react'

export default class SignUp extends React.Component {
  state = {
    name: "",
    location: "",
    email: "",
    bike: "",
    img: "",
    password: "",
    about: "",
    username: ""
  }

  changeHandler = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  register = (e) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        about: this.state.about,
        location: this.state.location,
        what_do_you_ride: this.state.bike,
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        img: this.state.img
      })
    })
    e.currentTarget.form.reset()
    alert("You have Sucessfully Registered!")
  }

  render() {
    return(
      <React.Fragment>
        <br/>
        <h1>Register</h1>
        <h5><font color="blue">Already A Member?</font> <Icon name='sign-in' ></Icon></h5>
        <br/>
        <Form size='small'>
          <Form.Field>
            <label>Name:</label>
            <input name='name' placeholder='Name' onChange={(e) => this.changeHandler(e.currentTarget.value, 'name')}/>
          </Form.Field>
          <Form.Field>
            <label>Username:</label>
            <input name='username' placeholder='Username' onChange={(e) => this.changeHandler(e.currentTarget.value, 'username')}/>
          </Form.Field>
          <Form.Field>
            <label>Location:</label>
            <input name='location' placeholder='Location' onChange={(e) => this.changeHandler(e.currentTarget.value, 'location')}/>
          </Form.Field>
          <Form.Field>
            <label>Email:</label>
            <input name='email' placeholder='Email' onChange={(e) => this.changeHandler(e.currentTarget.value, 'email')}/>
          </Form.Field>
          <Form.Field>
            <label>What Do You Ride?</label>
            <input name='bike' placeholder='What Do You Ride?' onChange={(e) => this.changeHandler(e.currentTarget.value, 'bike')}/>
          </Form.Field>
          <Form.Field>
            <label>Img:</label>
            <input name='img' placeholder='Image' onChange={(e) => this.changeHandler(e.currentTarget.value, 'img')}/>
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input name='password' type='password' placeholder='Password' onChange={(e) => this.changeHandler(e.currentTarget.value, 'password')}/>
          </Form.Field>
          <Form.Field>
            <label>About:</label>
            <TextArea name='about' placeholder='Tell us more' onChange={(e) => this.changeHandler(e.currentTarget.value, 'about')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit' onClick={(e) => this.register(e)}>Register!</Button>
        </Form>
      </React.Fragment>
    )
  }
}
