import React from 'react'
import { Button, Checkbox, Form, TextArea, Icon, Modal } from 'semantic-ui-react'
import Login from './Login'
import { NavLink } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    name: "",
    location: "",
    email: "",
    bike: "",
    img: "",
    password: "",
    about: "",
    username: "",
    loggedIn: null,
    modalOpen: false
  }

  changeHandler = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  register = (e, state ) => {
    this.props.history.push("/")
    fetch('https://moto-moto-api.herokuapp.com/users', {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },
      body: JSON.stringify({user:{
        name: this.state.name,
        about: this.state.about,
        location: this.state.location,
        what_do_you_ride: this.state.bike,
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        img: this.state.img
      }})
    }).then(r => r.json())
    .then(json => console.log(json))
    e.currentTarget.form.reset()

    alert("You have Sucessfully Registered!")
  }

    handleClose = () => {
      this.setState({
        modalOpen: false
      })
    }

    openModal = () => {
      this.setState({
        modalOpen: true
      })
    }

  render() {
    return(
      <React.Fragment>
        <br/>
        <h1>Register</h1>
        <h5><font color="blue">Already A Member?</font> <Modal
          trigger={<Icon name='sign-in' onClick={this.openModal} ></Icon>}
          open={this.state.modalOpen}
          // onClose={this.handleClose}
          as={NavLink}
          to='/login'
                                                        basic>
          <Login updateUser={this.props.updateUser} handleClose={this.handleClose}/>
        </Modal></h5>
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

export default withRouter(SignUp)
